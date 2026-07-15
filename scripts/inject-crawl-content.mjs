import fs from 'fs';
import { BLOG_META } from '../src/data/blogMeta.ts';
import { HOME_ARTICLE } from '../src/seo/homeArticle.ts';
import { SHARE_FACEBOOK, SHARE_REDDIT, SHARE_TWITTER } from '../src/seo/share.ts';
import { SITE_DESCRIPTION, SITE_H1, SITE_KEYWORDS, SITE_TITLE } from '../src/seo/titles.ts';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const safeParas = HOME_ARTICLE.paragraphs
  .map((p) => {
    return `          <p>${esc(p)}</p>`;
  })
  .join('\n');

const safeH3s = HOME_ARTICLE.h3s
  .map((block) => {
    return `        <h3>${esc(block.title)}</h3>\n          <p>${esc(block.text)}</p>`;
  })
  .join('\n');

const blogLinks = BLOG_META.map(
  (p) =>
    `            <li><a href="/blog/${p.slug}">${esc(p.title)}</a></li>`
).join('\n');

/**
 * CRITICAL: Real content must appear BEFORE any <script> in the document.
 * Many SEO auditors stop parsing at the first <script>, which caused
 * "None" for headings, paragraphs, media, and links.
 * Head must also stay script-free (JSON-LD + gtag go after #seo-landmarks).
 */
const body = `  <body style="background:#060409;margin:0;min-height:100vh;color:#f0ecff;font-family:Arial,Helvetica,sans-serif;line-height:1.75">
    <main id="seo-landmarks" aria-hidden="false" style="position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden">
      <header>
        <h1>${esc(SITE_H1)}</h1>
        <p>${esc(SITE_DESCRIPTION)}</p>
        <p><img src="/sand-cheats-hero-og.jpg" width="1280" height="720" loading="lazy" decoding="async" alt="Sand Cheats hero — SAND Raiders of Sophie dunes for ESP and wallhack" /></p>
        <p><img src="/sand-cheats-player-esp-og.jpg" width="1280" height="720" loading="lazy" decoding="async" alt="Sand Cheats player ESP and wallhack preview" /></p>
        <p><img src="/sand-cheats-loot-esp-og.jpg" width="1280" height="720" loading="lazy" decoding="async" alt="Sand Cheats loot ESP preview" /></p>
        <p><img src="/logo.png" width="512" height="512" loading="lazy" decoding="async" alt="Sand Cheats logo" /></p>
      </header>

      <article>
        <h2>${esc(HOME_ARTICLE.h2)}</h2>
${safeParas}
${safeH3s}
      </article>

      <section>
        <h2>Sand Cheats pages</h2>
        <ul>
          <li><a href="/">Sand Cheats home</a></li>
          <li><a href="/buy">Buy Sand Cheats</a></li>
          <li><a href="/blog">Sand Cheats blog</a></li>
          <li><a href="/#esp">Sand Cheats ESP features</a></li>
          <li><a href="/#about-cheat">About Sand Cheats</a></li>
          <li><a href="/#sand-cheats-overview">Sand Cheats overview</a></li>
          <li><a href="/#support">Sand Cheats support</a></li>
          <li><a href="/sitemap.xml">Sand Cheats sitemap</a></li>
          <li><a href="/sitemap-pages.xml">Sand Cheats pages sitemap</a></li>
          <li><a href="/sitemap-images.xml">Sand Cheats images sitemap</a></li>
          <li><a href="/robots.txt">Robots.txt</a></li>
          <li><a href="/site.webmanifest">Web manifest</a></li>
        </ul>
      </section>

      <section>
        <h2>Sand Cheats blog guides</h2>
        <ul>
${blogLinks}
        </ul>
      </section>

      <section>
        <h2>Sand Cheats external links</h2>
        <ul>
          <li><a href="https://zadeyo.com/go/QRH?to=%2Fproducts%2Fsand-raiders-of-sophie" rel="noopener noreferrer">Buy Sand Cheats on Zadeyo</a></li>
          <li><a href="https://discord.gg/zadeyo" rel="noopener noreferrer">Sand Cheats Discord support</a></li>
          <li><a href="${SHARE_TWITTER}" rel="noopener noreferrer">Share Sand Cheats on X / Twitter</a></li>
          <li><a href="${SHARE_FACEBOOK}" rel="noopener noreferrer">Share Sand Cheats on Facebook</a></li>
          <li><a href="${SHARE_REDDIT}" rel="noopener noreferrer">Share Sand Cheats on Reddit</a></li>
          <li><a href="https://store.steampowered.com/app/1431300/SAND_Raiders_of_Sophie/" rel="noopener noreferrer">SAND Raiders of Sophie on Steam</a></li>
          <li><a href="https://www.ign.com/games/sand-raiders-of-sophie" rel="noopener noreferrer">SAND Raiders of Sophie on IGN</a></li>
        </ul>
      </section>
    </main>

    <div id="root"></div>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": ${JSON.stringify(SITE_TITLE)},
      "alternateName": ["Sand Cheats", "sandcheats", "SandCheats"],
      "url": "https://sandcheats.net/",
      "image": "https://sandcheats.net/sand-cheats-hero-og.jpg",
      "screenshot": [
        "https://sandcheats.net/sand-cheats-hero-og.jpg",
        "https://sandcheats.net/sand-cheats-player-esp-og.jpg",
        "https://sandcheats.net/sand-cheats-loot-esp-og.jpg",
        "https://sandcheats.net/sand-cheats-trampler-showcase-og.jpg"
      ],
      "applicationCategory": "GameApplication",
      "applicationSubCategory": "Cheat Software",
      "operatingSystem": "Windows 10, Windows 11",
      "softwareVersion": "2026",
      "releaseNotes": "Updated for the latest patch. Player, NPC, loot, and extract ESP with customizable colors.",
      "offers": {
        "@type": "Offer",
        "price": "35",
        "priceCurrency": "USD",
        "priceValidUntil": "2027-12-31",
        "billingDuration": "P1M",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "url": "https://zadeyo.com/go/QRH?to=%2Fproducts%2Fsand-raiders-of-sophie"
      },
      "description": ${JSON.stringify(SITE_DESCRIPTION)},
      "keywords": ${JSON.stringify(SITE_KEYWORDS)}
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Sand Cheats",
      "alternateName": ["sandcheats", "SandCheats", "Sand Cheats"],
      "url": "https://sandcheats.net/",
      "description": ${JSON.stringify(SITE_DESCRIPTION)},
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://sandcheats.net/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sand Cheats",
      "alternateName": ["sandcheats", "SandCheats"],
      "url": "https://sandcheats.net/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sandcheats.net/logo.png",
        "width": 512,
        "height": 512,
        "caption": "Sand Cheats"
      },
      "image": [
        {
          "@type": "ImageObject",
          "url": "https://sandcheats.net/sand-cheats-hero-og.jpg",
          "contentUrl": "https://sandcheats.net/sand-cheats-hero-og.jpg",
          "name": "Sand Cheats hero dunes",
          "description": "SAND Raiders of Sophie dune combat for Sand Cheats ESP and wallhack",
          "width": 1280,
          "height": 720
        },
        {
          "@type": "ImageObject",
          "url": "https://sandcheats.net/sand-cheats-player-esp-og.jpg",
          "contentUrl": "https://sandcheats.net/sand-cheats-player-esp-og.jpg",
          "name": "Sand Cheats player ESP visuals",
          "description": "Player ESP coverage across Sophie island approaches",
          "width": 1280,
          "height": 720
        },
        {
          "@type": "ImageObject",
          "url": "https://sandcheats.net/sand-cheats-loot-esp-og.jpg",
          "contentUrl": "https://sandcheats.net/sand-cheats-loot-esp-og.jpg",
          "name": "Sand Cheats loot ESP",
          "description": "Loot ESP for night raids and through-wall loot awareness",
          "width": 1280,
          "height": 720
        },
        {
          "@type": "ImageObject",
          "url": "https://sandcheats.net/sand-cheats-trampler-showcase-og.jpg",
          "contentUrl": "https://sandcheats.net/sand-cheats-trampler-showcase-og.jpg",
          "name": "Sand Cheats trampler showcase",
          "description": "Trampler desert combat for ESP visuals and wallhack cheats",
          "width": 1280,
          "height": 720
        }
      ],
      "description": ${JSON.stringify(SITE_DESCRIPTION)},
      "sameAs": [
        "https://discord.gg/zadeyo",
        "https://zadeyo.com/go/QRH?to=%2Fproducts%2Fsand-raiders-of-sophie"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "url": "https://discord.gg/zadeyo",
        "availableLanguage": ["en", "ru"]
      }
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Sand Cheats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sand Cheats is a private Legit cheats and wallhack product for SAND: Raiders of Sophie. It is not a free single-player trainer and not related to SAND LAND trainers. Buy Sand Cheats for player visuals, loot overlays, and wallhack with patch updates."
          }
        },
        {
          "@type": "Question",
          "name": "Is Sand Cheats a free trainer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Sand Cheats is a paid private Legit cheats service for SAND Raiders of Sophie, delivered through Zadeyo at $35 per month with loader access, wipe updates, and Discord support."
          }
        },
        {
          "@type": "Question",
          "name": "Is Sand Cheats a Rage or Legit cheat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sand Cheats is Legit-only. There are no Rage features and no aimbot — only visual ESP for players, mobs, items, portals, ores, traps, and chests, with a menu in English and Russian. The product has been supported since Sand Cheats closed beta on Steam."
          }
        },
        {
          "@type": "Question",
          "name": "Is the Sand Cheats ban-proof?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No provider can guarantee zero bans. Sand Cheats is an external Legit ESP with wipe-aligned loader updates. Keep the loader current after every patch, and understand that reports and outdated builds still carry risk."
          }
        },
        {
          "@type": "Question",
          "name": "What ESP features are included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visuals include Enemy Box ESP, Enemy Line, Enemy Distance ESP, Enemy Health ESP, Enemy Name, Skeleton ESP, Item ESP, Portal ESP, Ores ESP, Traps ESP, and Chests ESP. Misc includes Customizable ESP Colors. There is no aimbot."
          }
        },
        {
          "@type": "Question",
          "name": "What does the Sand Cheats ESP show?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sand Cheats ESP shows Enemy Box, Enemy Line, Distance, Health, Name, Skeleton, Item, Portal, Ores, Traps, and Chests ESP — plus customizable colors. There is no aimbot."
          }
        },
        {
          "@type": "Question",
          "name": "Does the Sand Cheats work on Windows 11?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The cheat is fully compatible with Windows 10 and Windows 11 via Steam."
          }
        }
      ]
    }
    </script>

    <script>
      (function () {
        var host = location.hostname.toLowerCase();
        if (host === 'www.sandcheats.net' || location.protocol === 'http:') {
          location.replace('https://sandcheats.net' + location.pathname + location.search + location.hash);
        }
      })();
    </script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.addEventListener('load', function () {
        var loadGtag = function () {
          var s = document.createElement('script');
          s.src = 'https://www.googletagmanager.com/gtag/js?id=AW-18148261006';
          s.async = true;
          document.head.appendChild(s);
          gtag('js', new Date());
          gtag('config', 'AW-18148261006');
        };
        if ('requestIdleCallback' in window) {
          requestIdleCallback(loadGtag, { timeout: 6000 });
        } else {
          setTimeout(loadGtag, 4000);
        }
      });
    </script>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

const htmlPath = new URL('../index.html', import.meta.url);
const html = fs.readFileSync(htmlPath, 'utf8');
const start = html.indexOf('  <body');
if (start < 0) throw new Error('body not found');

// Ensure head stays script-free before body content
const head = html.slice(0, start);
if (/<script[\s>]/i.test(head)) {
  throw new Error('Head still contains <script> — remove it so auditors see body content');
}

fs.writeFileSync(htmlPath, head + body);
console.log('Injected auditor-safe SEO main before all scripts');
