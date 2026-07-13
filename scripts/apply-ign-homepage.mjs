import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const pub = path.join(root, 'public');

const headers = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  Accept: 'image/*,*/*',
  Referer: 'https://www.ign.com/games/sand-raiders-of-sophie',
};

const SOURCES = [
  {
    key: 'hero',
    url: 'https://sm.ign.com/t/ign_ap/photo/default/sand-rumble-at-dunes-1686759255494_dqww.1280.jpg',
  },
  {
    key: 'player',
    url: 'https://sm.ign.com/t/ign_ap/photo/default/sand-arriving-to-island-1686759255492_8fb7.1280.jpg',
  },
  {
    key: 'loot',
    url: 'https://sm.ign.com/t/ign_ap/photo/default/sand-night-at-the-island-1686759255493_jgpx.1280.jpg',
  },
  {
    key: 'showcase',
    url: 'https://sm.ign.com/t/ign_ap/gallery/s/sand-scree/sand-screenshots_xd5z.1400.jpg',
  },
];

async function download(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function writeVariants(buf, baseName) {
  const webpPath = path.join(pub, `${baseName}.webp`);
  const jpgPath = path.join(pub, `${baseName}-og.jpg`);

  await sharp(buf)
    .resize(1280, 720, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82 })
    .toFile(webpPath);

  await sharp(buf)
    .resize(1280, 720, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(jpgPath);

  return { webpPath, jpgPath };
}

const buffers = {};
for (const s of SOURCES) {
  console.log('fetch', s.key);
  buffers[s.key] = await download(s.url);
}

// Homepage product/showcase slots (distinct IGN frames)
await writeVariants(buffers.player, 'sand-cheats-player-esp');
await writeVariants(buffers.loot, 'sand-cheats-loot-esp');
await writeVariants(buffers.showcase, 'sand-cheats-trampler-showcase');

// Hero LCP
await sharp(buffers.hero)
  .resize(1280, 720, { fit: 'cover', position: 'centre' })
  .webp({ quality: 78 })
  .toFile(path.join(pub, 'hero-sand-cheats-player-esp-lcp.webp'));

// Social / OG
await sharp(buffers.showcase)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(pub, 'sand-cheats-social-preview.jpg'));

await sharp(buffers.hero)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(pub, 'og-google-preview.jpg'));

console.log('Homepage IGN assets written to public/');