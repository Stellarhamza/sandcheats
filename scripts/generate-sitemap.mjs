import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SITE = 'https://darkanddarkercheats.com';
const TODAY = new Date().toISOString().slice(0, 10);

const metaPath = path.join(ROOT, 'src', 'data', 'blogMeta.ts');
const metaSrc = fs.readFileSync(metaPath, 'utf8');
const start = metaSrc.indexOf('export const BLOG_META');
const assign = metaSrc.indexOf('= [', start);
const posts = JSON.parse(metaSrc.slice(assign + 2, metaSrc.lastIndexOf(']') + 1));

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const urls = [];

urls.push(`  <url>
    <loc>${SITE}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${SITE}/dark-and-darker-player-esp-skeleton-wallhack.png</image:loc>
      <image:title>Dark And Darker Cheats ESP wallhack</image:title>
    </image:image>
    <image:image>
      <image:loc>${SITE}/dark-and-darker-loot-esp-chest-wallhack.png</image:loc>
      <image:title>Dark And Darker Cheats loot ESP</image:title>
    </image:image>
    <image:image>
      <image:loc>${SITE}/dark-and-darker-esp-mob-trap-wallhack.png</image:loc>
      <image:title>Dark And Darker Cheats trap and mob ESP</image:title>
    </image:image>
  </url>`);

urls.push(`  <url>
    <loc>${SITE}/buy</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
    <image:image>
      <image:loc>${SITE}/dark-and-darker-player-esp-skeleton-wallhack.png</image:loc>
      <image:title>Buy Dark And Darker Cheats</image:title>
    </image:image>
  </url>`);

urls.push(`  <url>
    <loc>${SITE}/blog</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`);

for (const post of posts) {
  const imgPath = post.image.startsWith('/') ? post.image : `/${post.image}`;
  const absImg = `${SITE}${imgPath}`;
  const local = path.join(ROOT, 'public', imgPath.replace(/^\//, ''));
  if (!fs.existsSync(local)) {
    console.error('Missing image for', post.slug, imgPath);
    process.exit(1);
  }
  urls.push(`  <url>
    <loc>${SITE}/blog/${post.slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${absImg}</image:loc>
      <image:title>${esc(post.title)}</image:title>
    </image:image>
  </url>`);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

${urls.join('\n\n')}

</urlset>
`;

fs.writeFileSync(path.join(ROOT, 'public', 'sitemap.xml'), xml);
fs.writeFileSync(
  path.join(ROOT, 'public', 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`
);

console.log('Wrote sitemap with', 3 + posts.length, 'URLs');
