import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createElement as h } from 'react';
import { ImageResponse } from 'next/og.js';
import resolveConfig from 'tailwindcss/resolveConfig.js';
import tailwindConfig from '../tailwind.config.js';
import { PNG } from 'pngjs';

// Use the original PNG's alpha as a mask; never trace or edit its letterforms.
const root = new URL('../', import.meta.url);
const logo = await readFile(new URL('public/images/cullum-and-co-wordmark.png', root));
const { colors } = resolveConfig(tailwindConfig).theme;
const orange = colors.orange[600];
const white = colors.white;

// These are the supplied originals. Scale them uniformly; preserve their colors,
// backgrounds, and artwork rather than recreating them with type or masks.
async function sourceImage(path) {
  const bytes = await readFile(new URL(path, root));
  return {
    src: `data:image/png;base64,${bytes.toString('base64')}`,
    width: bytes.readUInt32BE(16),
    height: bytes.readUInt32BE(20),
  };
}

const curledC = await sourceImage('public/images/brand/curled-c-original.png');
const badge = await sourceImage('public/images/brand/cullum-and-co-badge-original.png');

function maskedLogo(color) {
  const image = PNG.sync.read(logo);
  const hex = color.slice(1);
  const expanded = hex.length === 3 ? [...hex].map((channel) => channel.repeat(2)).join('') : hex;
  const rgb = expanded.match(/../g).map((channel) => parseInt(channel, 16));
  for (let offset = 0; offset < image.data.length; offset += 4) {
    image.data[offset] = rgb[0];
    image.data[offset + 1] = rgb[1];
    image.data[offset + 2] = rgb[2];
    // Preserve every alpha value, including the original antialiased edges.
  }
  return PNG.sync.write(image);
}

const orangeLogo = maskedLogo(orange);

async function renderImage(image, width, height) {
  const scale = Math.min(width / image.width, height / image.height);
  const response = new ImageResponse(
    h('div', { style: {
      width: '100%', height: '100%', display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: white,
    } }, h('img', {
      src: image.src,
      width: image.width * scale,
      height: image.height * scale,
    })),
    { width, height },
  );
  return Buffer.from(await response.arrayBuffer());
}

async function save(path, bytes) {
  await writeFile(new URL(path, root), bytes);
  console.log(fileURLToPath(new URL(path, root)));
}

await writeFile(new URL('public/images/cullum-and-co-wordmark-orange.png', root), orangeLogo);

// Keep the entire square badge in the center so both wide and square previews
// retain its border and lettering. The original light background remains intact.
const sharingImage = await renderImage(badge, 1200, 630);
await save('public/images/cullum-and-co-badge-share.png', sharingImage);
// Keep the former URL useful for existing links; new metadata uses the new path.
await save('public/og.png', sharingImage);

for (const [path, size] of [['app/icon.png', 192], ['app/apple-icon.png', 180]]) {
  await save(path, await renderImage(curledC, size, size));
}

// ICO can contain PNG frames. Include native tab sizes instead of relying on a
// browser to reduce the full wordmark or a single oversized icon.
const sizes = [16, 32, 48];
const frames = await Promise.all(sizes.map((size) => renderImage(curledC, size, size)));
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
frames.forEach((frame, index) => {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(frame.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += frame.length;
});
await save('app/favicon.ico', Buffer.concat([directory, ...frames]));
