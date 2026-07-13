import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');

const SITE = 'https://sandcheats.net';
const TODAY = new Date().toISOString().slice(0, 10);

const HREFLANGS = [
  'en', 'de', 'fr', 'es', 'pt', 'ru', 'zh', 'ja', 'ko', 'tr', 'pl', 'nl', 'it', 'ar', 'th', 'vi',
];

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
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toIsoDate(date) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return TODAY;
  return parsed.toISOString().slice(0, 10);
}

function assertPublicFile(relPath, label) {
  const local = path.join(PUBLIC, relPath.replace(/^\//, ''));
  if (!fs.existsSync(local)) {
    console.error(`Missing ${label}: ${relPath}`);
    process.exit(1);
  }
  return `${SITE}${relPath.startsWith('/') ? relPath : `/${relPath}`}`;
}

function imageBlock({ loc, title, caption }) {
  const abs = assertPublicFile(loc.replace(SITE, ''), 'image');
  return `    <image:image>
      <image:loc>${abs}</image:loc>
      <image:title>${esc(title)}</image:title>
      <image:caption>${esc(caption)}</image:caption>
    </image:image>`;
}

function hreflangLinks(pathSuffix = '/') {
  const base = pathSuffix === '/' ? `${SITE}/` : `${SITE}${pathSuffix}`;
  const lines = HREFLANGS.map(
    (code) =>
      `    <xhtml:link rel="alternate" hreflang="${code}" href="${SITE}${pathSuffix === '/' ? '/' : pathSuffix}?lang=${code}" />`
  );
  lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${base}" />`);
  return lines.join('\n');
}

function urlEntry({
  locPath,
  lastmod,
  changefreq,
  priority,
  images = [],
  includeHreflang = false,
}) {
  const loc = locPath === '/' ? `${SITE}/` : `${SITE}${locPath}`;
  const parts = [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
  ];
  if (includeHreflang) parts.push(hreflangLinks(locPath));
  for (const img of images) parts.push(imageBlock(img));
  parts.push('  </url>');
  return parts.join('\n');
}

const homeImages = [
  {
    loc: '/sand-cheats-hero-og.jpg',
    title: 'Sand Cheats hero — SAND Raiders of Sophie dunes',
    caption: 'Sand Cheats homepage hero for SAND Raiders of Sophie ESP and wallhack',
  },
  {
    loc: '/sand-cheats-player-esp-og.jpg',
    title: 'Sand Cheats ESP wallhack',
    caption: 'Player ESP and wallhack coverage for sand cheats',
  },
  {
    loc: '/sand-cheats-loot-esp-og.jpg',
    title: 'Sand Cheats loot ESP',
    caption: 'Loot ESP and through-wall loot awareness for Sand Cheats',
  },
  {
    loc: '/sand-cheats-trampler-showcase-og.jpg',
    title: 'Sand Cheats trampler showcase',
    caption: 'Trampler desert showcase for Sand Cheats ESP visuals',
  },
  {
    loc: '/sand-cheats-social-preview.jpg',
    title: 'Sand Cheats social preview',
    caption: 'Sand Cheats Open Graph and social sharing image',
  },
  {
    loc: '/logo.png',
    title: 'Sand Cheats logo',
    caption: 'Sand Cheats brand logo for Google Search favicon and knowledge panel',
  },
];

const buyImages = [
  {
    loc: '/sand-cheats-player-esp-og.jpg',
    title: 'Buy Sand Cheats — player ESP',
    caption: 'Buy Sand Cheats with player ESP and wallhack',
  },
  {
    loc: '/sand-cheats-loot-esp-og.jpg',
    title: 'Buy Sand Cheats — loot ESP',
    caption: 'Buy Sand Cheats with loot ESP overlays',
  },
  {
    loc: '/sand-cheats-trampler-showcase-og.jpg',
    title: 'Buy Sand Cheats — trampler showcase',
    caption: 'Buy Sand Cheats trampler ESP showcase',
  },
  {
    loc: '/sand-cheats-social-preview.jpg',
    title: 'Buy Sand Cheats social preview',
    caption: 'Sand Cheats purchase page social preview',
  },
];

const blogIndexImages = [
  {
    loc: '/sand-cheats-social-preview.jpg',
    title: 'Sand Cheats blog',
    caption: 'Sand Cheats guides for SAND Raiders of Sophie cheats',
  },
  ...posts.map((p) => ({
    loc: p.image,
    title: p.title,
    caption: p.excerpt,
  })),
];

const pageUrls = [];

pageUrls.push(
  urlEntry({
    locPath: '/',
    lastmod: TODAY,
    changefreq: 'daily',
    priority: '1.0',
    images: homeImages,
    includeHreflang: true,
  })
);

pageUrls.push(
  urlEntry({
    locPath: '/buy',
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.95',
    images: buyImages,
    includeHreflang: true,
  })
);

pageUrls.push(
  urlEntry({
    locPath: '/blog',
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.9',
    images: blogIndexImages,
    includeHreflang: true,
  })
);

for (const post of posts) {
  pageUrls.push(
    urlEntry({
      locPath: `/blog/${post.slug}`,
      lastmod: toIsoDate(post.date),
      changefreq: 'monthly',
      priority: '0.75',
      images: [
        {
          loc: post.image,
          title: post.title,
          caption: post.excerpt,
        },
      ],
      includeHreflang: true,
    })
  );
}

const urlsetHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

const pagesXml = `${urlsetHeader}
${pageUrls.join('\n\n')}
</urlset>
`;

// Dedicated image sitemap (every unique image once, tied to primary page)
const seenImages = new Set();
const imageUrlEntries = [];

function pushImageUrl(pagePath, img) {
  const key = img.loc;
  if (seenImages.has(key)) return;
  seenImages.add(key);
  const pageLoc = pagePath === '/' ? `${SITE}/` : `${SITE}${pagePath}`;
  imageUrlEntries.push(`  <url>
    <loc>${pageLoc}</loc>
${imageBlock(img)}
  </url>`);
}

for (const img of homeImages) pushImageUrl('/', img);
for (const img of buyImages) pushImageUrl('/buy', img);
for (const img of blogIndexImages) pushImageUrl('/blog', img);
for (const post of posts) {
  pushImageUrl(`/blog/${post.slug}`, {
    loc: post.image,
    title: post.title,
    caption: post.excerpt,
  });
}

const imagesXml = `${urlsetHeader}
${imageUrlEntries.join('\n\n')}
</urlset>
`;

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE}/sitemap-pages.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE}/sitemap-images.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
</sitemapindex>
`;

const robotsTxt = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

Host: ${SITE.replace('https://', '')}

Sitemap: ${SITE}/sitemap-index.xml
Sitemap: ${SITE}/sitemap.xml
`;

fs.writeFileSync(path.join(PUBLIC, 'sitemap-pages.xml'), pagesXml);
fs.writeFileSync(path.join(PUBLIC, 'sitemap-images.xml'), imagesXml);
fs.writeFileSync(path.join(PUBLIC, 'sitemap.xml'), pagesXml);
fs.writeFileSync(path.join(PUBLIC, 'sitemap-index.xml'), indexXml);
fs.writeFileSync(path.join(PUBLIC, 'robots.txt'), robotsTxt);

console.log(
  `Wrote sitemaps: ${3 + posts.length} page URLs, ${seenImages.size} unique images, index + robots.txt`
);
