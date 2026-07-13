import { Link, useLocation } from 'react-router-dom';
import { SITE_URL } from './Seo';

type Crumb = { name: string; path: string };

const LABELS: Record<string, string> = {
  '/': 'Home',
  '/buy': 'Buy Dark And Darker Cheats',
  '/blog': 'Dark And Darker Cheat Blog',
};

export function Breadcrumbs() {
  const { pathname } = useLocation();
  const path = pathname !== '/' ? pathname.replace(/\/$/, '') : pathname;
  if (path === '/') return null;

  const crumbs: Crumb[] = [{ name: 'Home', path: '/' }];

  if (path.startsWith('/blog/')) {
    crumbs.push({ name: LABELS['/blog'], path: '/blog' });
    const slug = path.replace('/blog/', '');
    crumbs.push({ name: slug.replace(/-/g, ' '), path });
  } else if (LABELS[path]) {
    crumbs.push({ name: LABELS[path], path });
  } else {
    return null;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === '/' ? '/' : c.path}`,
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: `calc(env(safe-area-inset-top) + 68px) max(16px, env(safe-area-inset-right), 4vw) 0 max(16px, env(safe-area-inset-left), 4vw)`,
      }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol style={{
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px 10px',
        padding: 0,
        margin: 0,
        fontFamily: 'var(--font-body)',
        fontSize: '0.8125rem',
        color: 'var(--text-muted)',
      }}>
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.path} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              {i > 0 && <span aria-hidden style={{ opacity: 0.5 }}>/</span>}
              {last ? (
                <span style={{ color: 'var(--text-secondary)', textTransform: 'capitalize' }}>{c.name}</span>
              ) : (
                <Link to={c.path} style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}>
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
