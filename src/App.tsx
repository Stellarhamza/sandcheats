import { SITE_TITLE, SITE_DESCRIPTION } from './seo/titles';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Breadcrumbs } from './components/Breadcrumbs';
import { HomePage } from './pages/Home';
import { BLOG_META } from './data/blogMeta';
import { I18nProvider } from './i18n';
import { SITE_URL, Seo } from './components/Seo';
import './globals.css';

const StorePage = lazy(() => import('./pages/Store').then((m) => ({ default: m.StorePage })));
const BlogListPage = lazy(() => import('./pages/Blog').then((m) => ({ default: m.BlogListPage })));
const BlogPostPage = lazy(() => import('./pages/Blog').then((m) => ({ default: m.BlogPostPage })));

const HOME_TITLE = SITE_TITLE;
const HOME_DESCRIPTION = SITE_DESCRIPTION;

const HOME_IMAGES = [
  `${SITE_URL}/sand-cheats-hero-og.jpg`,
  `${SITE_URL}/sand-cheats-player-esp-og.jpg`,
  `${SITE_URL}/sand-cheats-loot-esp-og.jpg`,
  `${SITE_URL}/sand-cheats-trampler-showcase-og.jpg`,
  `${SITE_URL}/sand-cheats-social-preview.jpg`,
] as const;

const HOME_OG_IMAGE = `${SITE_URL}/sand-cheats-hero-og.jpg`;
const BLOG_OG_IMAGE = `${SITE_URL}/sand-cheats-social-preview.jpg`;
const BUY_OG_IMAGE = `${SITE_URL}/sand-cheats-player-esp-og.jpg`;

function toIsoDate(date: string) {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? date : parsed.toISOString().slice(0, 10);
}

function RouteSeo() {
  const { pathname } = useLocation();
  const currentPath = pathname !== '/' ? pathname.replace(/\/$/, '') : pathname;

  if (currentPath === '/blog') {
    return (
      <Seo
        title="Sand Cheats Blog | ESP, Wallhack & Safety Guides"
        description="Sand cheats and SAND Raiders of Sophie cheats blog — ESP, wallhack, and safety guides for private Legit overlays."
        path="/blog"
        image={BLOG_OG_IMAGE}
        imageAlt="Sand Cheats blog — ESP, wallhack and safety guides"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Sand Cheats Blog | ESP, Wallhack & Safety Guides',
          description: 'Guides and comparisons for sand cheats, SAND Raiders of Sophie cheats ESP, safety, and patch updates.',
          url: `${SITE_URL}/blog`,
          image: BLOG_OG_IMAGE,
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: BLOG_OG_IMAGE,
            contentUrl: BLOG_OG_IMAGE,
            width: 1200,
            height: 630,
          },
          isPartOf: { '@type': 'WebSite', name: 'Sand Cheats', url: SITE_URL },
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: BLOG_META.length,
            itemListElement: BLOG_META.map((post, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${SITE_URL}/blog/${post.slug}`,
              name: post.title,
              image: `${SITE_URL}${post.image}`,
            })),
          },
        }}
      />
    );
  }

  if (currentPath.startsWith('/blog/')) {
    const slug = currentPath.replace('/blog/', '');
    const post = BLOG_META.find((entry) => entry.slug === slug);

    if (post) {
      const canonicalPath = `/blog/${post.slug}`;
      const canonicalUrl = `${SITE_URL}${canonicalPath}`;
      const postImage = `${SITE_URL}${post.image}`;

      return (
        <Seo
          title={`${post.title} | Sand Cheats`}
          description={post.excerpt}
          path={canonicalPath}
          image={postImage}
          imageAlt={post.title}
          type="article"
          structuredData={{
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: [postImage],
            datePublished: toIsoDate(post.date),
            dateModified: toIsoDate(post.date),
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': canonicalUrl,
              primaryImageOfPage: {
                '@type': 'ImageObject',
                url: postImage,
                contentUrl: postImage,
              },
            },
            author: {
              '@type': 'Organization',
              name: 'Sand Cheats',
              url: SITE_URL,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Sand Cheats',
              logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/logo.png`,
                width: 512,
                height: 512,
              },
            },
          }}
        />
      );
    }
  }

  if (currentPath === '/buy') {
    return (
      <Seo
        title="Buy Sand Cheats | SAND Raiders of Sophie Cheats – ESP & Wallhack"
        description="Buy Sand Cheats for SAND Raiders of Sophie — Legit ESP, wallhack, and loot overlays. $35/month with patch updates on Steam."
        path="/buy"
        image={BUY_OG_IMAGE}
        imageAlt="Buy Sand Cheats — SAND Raiders of Sophie ESP and wallhack"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Sand Cheats | SAND Raiders of Sophie Cheats – ESP & Wallhack',
          description:
            'Private sand cheats and SAND Raiders of Sophie cheats — ESP, wallhack, player, NPC, loot, and extract visuals. Legit-style overlay, patch updates, English and Russian menu. Delivered via Zadeyo.',
          image: [...HOME_IMAGES],
          brand: { '@type': 'Brand', name: 'Sand Cheats' },
          offers: {
            '@type': 'Offer',
            url: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fsand-raiders-of-sophie',
            priceCurrency: 'USD',
            price: '35',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
          },
        }}
      />
    );
  }

  return (
    <Seo
      title={HOME_TITLE}
      description={HOME_DESCRIPTION}
      path="/"
      image={HOME_OG_IMAGE}
      imageAlt="Sand Cheats — SAND Raiders of Sophie ESP and wallhack"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: HOME_TITLE,
        description: HOME_DESCRIPTION,
        url: `${SITE_URL}/`,
        image: [...HOME_IMAGES],
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: HOME_OG_IMAGE,
          contentUrl: HOME_OG_IMAGE,
          width: 1280,
          height: 720,
        },
        isPartOf: {
          '@type': 'WebSite',
          name: 'Sand Cheats',
          alternateName: ['sandcheats', 'SandCheats', 'Sand Cheats ESP'],
          url: SITE_URL,
        },
        about: {
          '@type': 'Thing',
          name: 'Sand Cheats',
          description:
            'Private Legit ESP and wallhack for SAND: Raiders of Sophie — not a free trainer and not SAND LAND cheats.',
        },
      }}
    />
  );
}

function RouteFallback() {
  return (
    <div
      aria-hidden
      style={{
        minHeight: '40vh',
        background: 'var(--bg-void)',
      }}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <RouteSeo />
        <Navbar />
        <Breadcrumbs />
        <main>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/buy" element={<StorePage />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </I18nProvider>
    </BrowserRouter>
  );
}
