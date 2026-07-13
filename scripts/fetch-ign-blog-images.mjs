/**
 * Download IGN SAND: Raiders of Sophie screenshots for blog covers.
 * Sources: https://sea.ign.com/sand/221497/gallery/sand-screenshots
 *          https://www.ign.com/games/sand-raiders-of-sophie
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');

/** High-res IGN CDN screenshots for SAND */
const IGN_SOURCES = [
  'https://sm.ign.com/t/ign_ap/gallery/s/sand-scree/sand-screenshots_xd5z.1400.jpg',
  'https://sm.ign.com/t/ign_ap/photo/default/sand-rumble-at-dunes-1686759255494_dqww.1280.jpg',
  'https://sm.ign.com/t/ign_ap/photo/default/sand-night-at-the-island-1686759255493_jgpx.1280.jpg',
  'https://sm.ign.com/t/ign_ap/photo/default/sand-arriving-to-island-1686759255492_8fb7.1280.jpg',
  'https://sm.ign.com/t/ign_ap/photo/default/sand-rumble-at-dunes-1686759255494_dqww.1080.jpg',
  'https://sm.ign.com/t/ign_ap/photo/default/sand-night-at-the-island-1686759255493_jgpx.1080.jpg',
  'https://sm.ign.com/t/ign_ap/photo/default/sand-arriving-to-island-1686759255492_8fb7.1080.jpg',
  'https://sm.ign.com/t/ign_ap/gallery/s/sand-scree/sand-screenshots_xd5z.1080.jpg',
];

const BLOG_FILES = [
  'blog-sand-esp-guide.jpg',
  'blog-sand-hwid-spoofer.jpg',
  'blog-sand-aimbot-guide.jpg',
  'blog-sand-ban-waves.jpg',
  'blog-sand-loot-esp.jpg',
  'blog-sand-anticheat.jpg',
  'blog-sand-beginners.jpg',
  'blog-sand-external-cheat.jpg',
  'blog-sand-recoil-control.jpg',
  'blog-sand-makima.jpg',
  'blog-sand-zadeyo.jpg',
  'blog-sand-cheats-comparison.jpg',
  'blog-sand-player-esp.jpg',
  'blog-sand-guide.jpg',
  'blog-sand-patch-updates.jpg',
];

const CROP_POSITIONS = [
  'centre', 'north', 'south', 'east', 'west',
  'northeast', 'northwest', 'southeast', 'southwest',
  'centre', 'north', 'east', 'west', 'south', 'centre',
];

const MODULATIONS = [
  { brightness: 1, saturation: 1.05 },
  { brightness: 0.92, saturation: 1.15 },
  { brightness: 1.05, saturation: 0.95 },
  { brightness: 0.88, saturation: 1.2 },
  { brightness: 1.08, saturation: 1.1 },
  { brightness: 0.95, saturation: 1.0 },
  { brightness: 1.02, saturation: 1.25 },
  { brightness: 0.9, saturation: 1.08 },
  { brightness: 1.1, saturation: 0.9 },
  { brightness: 0.85, saturation: 1.15 },
  { brightness: 1.0, saturation: 1.3 },
  { brightness: 0.97, saturation: 1.05 },
  { brightness: 1.06, saturation: 1.12 },
  { brightness: 0.93, saturation: 1.18 },
  { brightness: 1.04, saturation: 1.0 },
];

async function download(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; SandCheatsAssetBot/1.0)',
      Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
      Referer: 'https://www.ign.com/games/sand-raiders-of-sophie',
    },
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

const buffers = [];
const attribution = [];

for (const url of IGN_SOURCES) {
  try {
    const buf = await download(url);
    // Skip tiny thumbs
    if (buf.length < 20000) {
      console.warn('too small', url, buf.length);
      continue;
    }
    buffers.push({ url, buf });
    console.log('got', Math.round(buf.length / 1024) + 'KB', url.split('/').pop());
  } catch (e) {
    console.warn('fail', e.message);
  }
}

if (buffers.length === 0) {
  console.error('No IGN images downloaded');
  process.exit(1);
}

for (let i = 0; i < BLOG_FILES.length; i++) {
  const file = BLOG_FILES[i];
  const src = buffers[i % buffers.length];
  const mod = MODULATIONS[i];
  const pos = CROP_POSITIONS[i];
  await sharp(src.buf)
    .rotate()
    .resize(1280, 720, { fit: 'cover', position: pos })
    .modulate(mod)
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(PUBLIC, file));
  attribution.push({
    file,
    source: src.url,
    credit: 'IGN / SAND: Raiders of Sophie screenshot',
    gallery: 'https://sea.ign.com/sand/221497/gallery/sand-screenshots',
    gamePage: 'https://www.ign.com/games/sand-raiders-of-sophie',
  });
  const size = fs.statSync(path.join(PUBLIC, file)).size;
  console.log('wrote', file, Math.round(size / 1024) + 'KB');
}

fs.writeFileSync(
  path.join(PUBLIC, 'BLOG_IMAGE_ATTRIBUTION.json'),
  JSON.stringify(attribution, null, 2),
);
console.log('Done. Sources used:', buffers.length);
