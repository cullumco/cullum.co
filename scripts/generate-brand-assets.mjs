import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createElement as h } from 'react';
import { ImageResponse } from 'next/og.js';

// Compose the supplied wordmark without cropping, recoloring, or redrawing it.
const root = new URL('../', import.meta.url);
const logo = await readFile(new URL('public/images/cullum-and-co-wordmark.png', root));
const source = `data:image/png;base64,${logo.toString('base64')}`;
const ratio = logo.readUInt32BE(20) / logo.readUInt32BE(16);
const logoImage = (width) => h('img', {
  src: source,
  alt: 'Cullum & Co',
  width,
  height: width * ratio,
});

async function render(path, width, height, element) {
  const response = new ImageResponse(element, { width, height });
  await writeFile(new URL(path, root), Buffer.from(await response.arrayBuffer()));
  console.log(fileURLToPath(new URL(path, root)));
}

await render('public/og.png', 1200, 630,
  h('div', { style: {
    width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', background: '#fafafa',
    color: '#171717', borderBottom: '12px solid #ea580c',
  } },
  logoImage(900),
  h('div', { style: { fontSize: 38, marginTop: 18 } }, 'Creative technology & fractional advisory'),
  h('div', { style: { fontSize: 25, color: '#c2410c', marginTop: 28 } }, 'cullum.co')),
);

for (const [path, size] of [['app/icon.png', 96], ['app/apple-icon.png', 180]]) {
  await render(path, size, size,
    h('div', { style: {
      width: '100%', height: '100%', display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: '#fafafa',
    } }, logoImage(size * 0.94)),
  );
}
