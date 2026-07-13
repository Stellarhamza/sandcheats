import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Breadcrumbs } from './components/Breadcrumbs';
import { HomePage } from './pages/Home';
import { BLOG_META } from './data/blogMeta';
import { I18nProvider } from './i18n';
import { DEFAULT_OG_IMAGE, SITE_URL, Seo } from './components/Seo';
import './globals.css';

const StorePage = lazy(() => import('./pages/Store').then((m) => ({ default: m.StorePage })));
const BlogListPage = lazy(() => import('./pages/Blog').then((m) => ({ default: m.BlogListPage })));
const BlogPostPage = lazy(() => import('./pages/Blog').then((m) => ({ default: m.BlogPostPage })));

const HOME_TITLE = 'Dark And Darker Cheats | Aimbot, ESP & Wallhack - DND';
const HOME_DESCRIPTION = 'Buy Dark And Darker Cheats with ESP & wallhack for DND. Private Legit overlays and wipe updates on Steam.';

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
        title="Dark And Darker Cheat Blog | ESP, Wallhack & Safety Guides - DND"
        description="Dark And Darker Cheats blog: ESP, wallhack, and DND safety guides for private Legit overlays."
        path="/blog"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Dark And Darker Cheat Blog | ESP, Wallhack & Safety Guides - DND',
          description: 'Guides and comparisons for Dark and Darker ESP, safety, and wipe updates.',
          url: `${SITE_URL}/blog`,
          isPartOf: { '@type': 'WebSite', name: 'Dark And Darker Cheats', url: SITE_URL },
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

      return (
        <Seo
          title={`${post.title} | Dark And Darker Cheats - DND`}
          description={post.excerpt}
          path={canonicalPath}
          image={`${SITE_URL}${post.image}`}
          type="article"
          structuredData={{
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: `${SITE_URL}${post.image}`,
            datePublished: toIsoDate(post.date),
            dateModified: toIsoDate(post.date),
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': canonicalUrl,
            },
            author: {
              '@type': 'Organization',
              name: 'DarkerCheats',
              url: SITE_URL,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Dark And Darker Cheats',
              logo: {
                '@type': 'ImageObject',
                url: DEFAULT_OG_IMAGE,
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
        title="Buy Dark And Darker Cheats | Aimbot, ESP & Wallhack - DND"
        description="Buy Dark And Darker Cheats with ESP & wallhack for DND. Private Legit overlays and wipe updates on Steam."
        path="/buy"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Dark And Darker Cheats | Aimbot, ESP & Wallhack - DND',
          description:
            'Private Dark And Darker ESP and wallhack with enemy, item, portal, ore, trap, and chest visuals. Legit-style overlay, wipe updates, English and Russian menu. Delivered via Zadeyo.',
          image: [
            `${SITE_URL}/dark-and-darker-player-esp-skeleton-wallhack.png`,
            `${SITE_URL}/dark-and-darker-loot-esp-chest-wallhack.png`,
            `${SITE_URL}/dark-and-darker-esp-mob-trap-wallhack.png`,
          ],
          brand: { '@type': 'Brand', name: 'DarkerCheats' },
          offers: {
            '@type': 'Offer',
            url: 'https://zadeyo.com/products/dark-and-darker-cheats',
            priceCurrency: 'USD',
            price: '35',
            availability: 'https://schema.org/InStock',
          },
        }}
      />
    );
  }

  return <Seo title={HOME_TITLE} description={HOME_DESCRIPTION} path="/" />;
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
