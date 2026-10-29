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
const logoWidth = logo.readUInt32BE(16);
const logoHeight = logo.readUInt32BE(20);
const ratio = logoHeight / logoWidth;
const { colors } = resolveConfig(tailwindConfig).theme;
const orange = colors.orange[600];
const white = colors.white;

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
const whiteLogo = maskedLogo(white);
const logoImage = (width, color = orange) => h('img', {
  src: `data:image/png;base64,${(color === white ? whiteLogo : orangeLogo).toString('base64')}`,
  alt: 'Cullum & Co',
  width,
  height: width * ratio,
});

async function render(path, width, height, element) {
  const response = new ImageResponse(element, { width, height });
  await writeFile(new URL(path, root), Buffer.from(await response.arrayBuffer()));
  console.log(fileURLToPath(new URL(path, root)));
}

await writeFile(new URL('public/images/cullum-and-co-wordmark-orange.png', root), orangeLogo);

await render('public/og.png', 1200, 630,
  h('div', { style: {
    width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', background: white,
    color: colors.neutral[900], borderBottom: `12px solid ${orange}`,
  } },
  logoImage(900),
  h('div', { style: { fontSize: 38, marginTop: 18 } }, 'Scott Cullum'),
  h('div', { style: { fontSize: 26, marginTop: 8 } }, 'Creative technology & fractional advisory'),
  h('div', { style: { fontSize: 25, color: colors.orange[700], marginTop: 20 } }, 'cullum.co')),
);

for (const [path, size] of [['app/icon.png', 96], ['app/apple-icon.png', 180]]) {
  await render(path, size, size,
    h('div', { style: {
      width: '100%', height: '100%', display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: orange,
    } }, logoImage(size * 0.94, white)),
  );
}
