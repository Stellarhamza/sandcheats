import fs from 'fs';
import { BLOG_META } from '../src/data/blogMeta.ts';
import { HOME_ARTICLE } from '../src/seo/homeArticle.ts';
import { SHARE_FACEBOOK, SHARE_REDDIT, SHARE_TWITTER } from '../src/seo/share.ts';

const safeParas = HOME_ARTICLE.paragraphs
  .map((p) => {
    let t = p.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    t = t.replace(/Sand Cheats/g, '<strong>Sand Cheats</strong>');
    t = t.replace(/SAND Raiders of Sophie/g, '<strong>SAND Raiders of Sophie</strong>');
    t = t.replace(/sand cheats/g, '<strong>sand cheats</strong>');
    t = t.replace(/\bESP\b/g, '<strong>ESP</strong>');
    t = t.replace(/\bwallhack\b/gi, (m) => `<strong>${m}</strong>`);
    return `          <p>${t}</p>`;
  })
  .join('\n');

const safeH3s = HOME_ARTICLE.h3s
  .map((block) => {
    let t = block.text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    t = t.replace(/Sand Cheats/g, '<strong>Sand Cheats</strong>');
    t = t.replace(/SAND Raiders of Sophie/g, '<strong>SAND Raiders of Sophie</strong>');
    t = t.replace(/sand cheats/g, '<strong>sand cheats</strong>');
    t = t.replace(/\bESP\b/g, '<strong>ESP</strong>');
    t = t.replace(/\bwallhack\b/gi, (m) => `<strong>${m}</strong>`);
    const title = block.title.replace(/&/g, '&amp;');
    return `        <h3>${title}</h3>\n          <p>${t}</p>`;
  })
  .join('\n');

const blogLinks = BLOG_META.map(
  (p) =>
    `            <li><a href="/blog/${p.slug}">${p.title.replace(/&/g, '&amp;')}</a></li>`
).join('\n');

/**
 * CRITICAL: Real content must appear BEFORE any <script> in the document.
 * Many SEO auditors stop parsing at the first <script>, which caused
 * "None" for headings, paragraphs, media, and links.
 * Head must also stay script-free (JSON-LD + gtag go after #seo-landmarks).
 */
const body = `  <body style="background:#060409;margin:0;min-height:100vh;color:#f0ecff;font-family:Arial,Helvetica,sans-serif;line-height:1.75">
    <main id="seo-landmarks" style="max-width:880px;margin:0 auto;padding:24px 16px 48px">
      <header>
        <h1>Sand Cheats | SAND Raiders of Sophie Cheats – ESP &amp; Wallhack</h1>
        <p>Buy <strong>sand cheats</strong> and <strong>SAND Raiders of Sophie</strong> cheats — private Legit <strong>ESP</strong>, <strong>wallhack</strong>, and loot overlays from <strong>Sand Cheats</strong> with patch updates and Discord support.</p>
        <p><img src="/sand-cheats-hero-og.jpg" width="1280" height="720" alt="Sand Cheats hero — SAND Raiders of Sophie dunes for ESP and wallhack" style="max-width:100%;height:auto;border-radius:12px" /></p>
        <p><img src="/sand-cheats-player-esp-og.jpg" width="1280" height="720" alt="Sand Cheats player ESP and wallhack preview" style="max-width:100%;height:auto;border-radius:12px;margin-top:12px" /></p>
        <p><img src="/sand-cheats-loot-esp-og.jpg" width="1280" height="720" alt="Sand Cheats loot ESP preview" style="max-width:100%;height:auto;border-radius:12px;margin-top:12px" /></p>
        <p><img src="/logo.png" width="512" height="512" alt="Sand Cheats logo" style="max-width:120px;height:auto;margin-top:12px" /></p>
      </header>

      <article>
        <h2>${HOME_ARTICLE.h2.replace(/&/g, '&amp;')}</h2>
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
      "name": "Sand Cheats | SAND Raiders of Sophie Cheats – ESP & Wallhack",
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
      "description": "Buy sand cheats and SAND Raiders of Sophie cheats with ESP and wallhack. Private Legit overlays and patch updates on Steam.",
      "keywords": "sand cheats, sand raiders of sophie cheats, SAND Raiders of Sophie cheats, sand raiders of sophie ESP, sand raiders of sophie wallhack, sand aimbot, sand loot ESP, sandcheats, raiders of sophie cheats"
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Sand Cheats",
      "url": "https://sandcheats.net/",
      "description": "Buy sand cheats and SAND Raiders of Sophie cheats with ESP and wallhack. Private Legit overlays and patch updates on Steam.",
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
      "description": "Buy sand cheats and SAND Raiders of Sophie cheats with ESP and wallhack. Private Legit overlays and patch updates on Steam.",
      "sameAs": [
        "https://discord.gg/zadeyo",
        "https://zadeyo.com/go/QRH?to=%2Fproducts%2Fsand-raiders-of-sophie"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "url": "https://discord.gg/zadeyo",
        "availableLanguage": ["English", "Russian"]
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
          requestIdleCallback(loadGtag, { timeout: 2500 });
        } else {
          setTimeout(loadGtag, 1500);
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
