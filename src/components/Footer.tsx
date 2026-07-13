import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { DND_CLUSTER } from '../seo/cluster';

const ZADEYO_STORE = 'https://zadeyo.com/products/dark-and-darker-cheats';
const DISCORD = 'https://discord.gg/zadeyo';

const linkStyle = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '0.875rem',
  lineHeight: 1.5,
  transition: 'color 0.18s ease',
} as const;

function FootLink({ to, children }: { to: string; children: string }) {
  const external = to.startsWith('http');
  const props = {
    style: { ...linkStyle },
    onMouseEnter: (e: MouseEvent<HTMLAnchorElement>) => {
      e.currentTarget.style.color = 'var(--text-secondary)';
    },
    onMouseLeave: (e: MouseEvent<HTMLAnchorElement>) => {
      e.currentTarget.style.color = 'var(--text-muted)';
    },
  };
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-deep)',
      borderTop: '1px solid var(--border-ghost)',
      padding: `clamp(40px, 5vw, 56px) max(16px, env(safe-area-inset-right), 4vw) 0 max(16px, env(safe-area-inset-left), 4vw)`,
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: 'clamp(28px, 4vw, 48px)',
          paddingBottom: 'clamp(28px, 4vw, 40px)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.18em',
                color: 'rgba(240,236,255,0.4)',
                textTransform: 'uppercase',
              }}>DARKER</span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '1.25rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 60%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginLeft: '3px',
              }}>CHEATS</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
              maxWidth: '320px',
              margin: 0,
            }}>
              Private Dark And Darker ESP &amp; wallhack (DND). Legit-style visuals, wipe updates, English &amp; Russian menu.
              Checkout and loader delivery via Zadeyo.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              margin: 0,
            }}>
              Last meaningful content review: July 12, 2026. Product features and wipe notes are updated when the live client changes.
            </p>
          </div>

          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              marginBottom: 14,
            }}>Shop</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FootLink to="/">Dark And Darker Cheats home</FootLink>
              <FootLink to="/buy">Buy Dark And Darker Cheats</FootLink>
              <FootLink to={ZADEYO_STORE}>Checkout on Zadeyo store</FootLink>
              <FootLink to={DISCORD}>Join Zadeyo Discord support</FootLink>
            </div>
          </div>

          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              marginBottom: 14,
            }}>Guides</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FootLink to="/blog">Dark And Darker cheat blog</FootLink>
              {DND_CLUSTER.guides.slice(0, 4).map((g) => (
                <FootLink key={g.to} to={g.to}>{g.label}</FootLink>
              ))}
            </div>
          </div>

          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              marginBottom: 14,
            }}>Trust</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FootLink to="/#about-cheat">Product information &amp; Legit policy</FootLink>
              <FootLink to="/blog/staying-updated-after-patches">Wipe update &amp; loader safety guide</FootLink>
              <FootLink to={DISCORD}>Share feedback on Discord</FootLink>
              <a
                href="https://twitter.com/intent/tweet?text=Dark%20And%20Darker%20Cheats%20ESP%20%26%20Wallhack&url=https%3A%2F%2Fdarkanddarkercheats.com%2F"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  lineHeight: 1.5,
                }}
              >
                Share on X / Twitter
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdarkanddarkercheats.com%2F"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  lineHeight: 1.5,
                }}
              >
                Share on Facebook
              </a>
              <a
                href="https://www.reddit.com/submit?url=https%3A%2F%2Fdarkanddarkercheats.com%2F&title=Dark%20And%20Darker%20Cheats"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  lineHeight: 1.5,
                }}
              >
                Share on Reddit
              </a>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                lineHeight: 1.55,
              }}>
                Not affiliated with Ironmace Games. No guaranteed ban immunity — keep the loader updated after each wipe.
              </span>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border-ghost)',
          padding: '16px 0 20px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
        }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            © 2026 DarkerCheats / Dark And Darker Cheats (DND). Not affiliated with Ironmace Games or Dark and Darker.
          </span>
        </div>
      </div>
    </footer>
  );
}
