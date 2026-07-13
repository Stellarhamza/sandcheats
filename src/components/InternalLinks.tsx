import { Link } from 'react-router-dom';
import { SAND_CLUSTER } from '../seo/cluster';
import {
  SHARE_DISCORD,
  SHARE_FACEBOOK,
  SHARE_REDDIT,
  SHARE_TWITTER,
} from '../seo/share';

const EXTERNAL = [
  {
    href: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fsand-raiders-of-sophie',
    label: 'Buy Sand Cheats on Zadeyo',
  },
  { href: SHARE_DISCORD, label: 'Sand Cheats Discord support' },
  { href: SHARE_TWITTER, label: 'Share Sand Cheats on X / Twitter' },
  { href: SHARE_FACEBOOK, label: 'Share Sand Cheats on Facebook' },
  { href: SHARE_REDDIT, label: 'Share Sand Cheats on Reddit' },
  {
    href: 'https://store.steampowered.com/app/1431300/SAND_Raiders_of_Sophie/',
    label: 'SAND Raiders of Sophie on Steam',
  },
  {
    href: 'https://www.ign.com/games/sand-raiders-of-sophie',
    label: 'SAND Raiders of Sophie on IGN',
  },
] as const;

const linkCss = {
  color: 'var(--accent-bright)',
  textDecoration: 'none',
  fontSize: '0.875rem',
} as const;

/** Dense internal + external links for SEO crawlers (plain <a href>) */
export function InternalLinks() {
  return (
    <section
      aria-label="Sand Cheats site links"
      style={{
        background: 'var(--bg-void)',
        padding: 'clamp(48px, 6vw, 72px) 0',
        borderTop: '1px solid var(--border-ghost)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: `0 max(16px, env(safe-area-inset-right), 4vw) 0 max(16px, env(safe-area-inset-left), 4vw)`,
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          Explore Sand Cheats
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'clamp(20px, 3vw, 32px)',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                marginBottom: 12,
              }}
            >
              Pages
            </h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {SAND_CLUSTER.homeAnchors.map((item) => (
                <li key={item.to}>
                  <a href={item.to} style={linkCss}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <h3
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                marginBottom: 12,
              }}
            >
              Guides
            </h3>
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                gap: 8,
              }}
            >
              {SAND_CLUSTER.guides.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} style={linkCss}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                marginBottom: 12,
              }}
            >
              External
            </h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {EXTERNAL.map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" style={linkCss}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
