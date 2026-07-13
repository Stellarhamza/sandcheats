import { Link } from 'react-router-dom';
import { AnimatedSection } from './AnimatedSection';
import { BLOG_META } from '../data/blogMeta';

const SITE = 'https://sandcheats.net';

/** Homepage blog teaser — real anchors + visible copy for Googlebot */
export function BlogPreview() {
  const posts = BLOG_META.slice(0, 6);

  return (
    <section
      id="blog"
      aria-labelledby="blog-preview-heading"
      style={{
        background: 'var(--bg-base)',
        padding: 'clamp(72px, 9vw, 110px) 0',
        position: 'relative',
      }}
    >
      {/* Crawlable JSON-LD ItemList always in the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Sand Cheats Blog',
            itemListElement: BLOG_META.map((post, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${SITE}/blog/${post.slug}`,
              name: post.title,
              image: `${SITE}${post.image}`,
            })),
          }),
        }}
      />

      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: `0 max(16px, env(safe-area-inset-right), 4vw) 0 max(16px, env(safe-area-inset-left), 4vw)`,
      }}>
        <AnimatedSection>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 20,
            marginBottom: 'clamp(32px, 5vw, 48px)',
          }}>
            <div>
              <p className="section-label" style={{ marginBottom: 14 }}>Blog</p>
              <h2
                id="blog-preview-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Sand Cheats{' '}
                <span className="gradient-text">Guides &amp; Tips</span>
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: 520,
                marginTop: 12,
              }}>
                ESP guides, safety tips, and wipe updates — indexed on{' '}
                <Link to="/blog" style={{ color: 'var(--accent-bright)' }}>/blog</Link>
                {' '}for Google and players.
              </p>
            </div>
            <Link to="/blog" className="btn-ghost" style={{ fontSize: '0.875rem', padding: '12px 22px' }}>
              Read the Sand Cheats blog →
            </Link>
          </div>
        </AnimatedSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(16px, 2.5vw, 24px)',
        }}>
          {posts.map((post) => (
            <article key={post.slug} style={{ height: '100%' }}>
              <Link
                to={`/blog/${post.slug}`}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
              >
                <div className="glass-card" style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <img
                    src={post.image}
                    alt={`${post.title} — Sand Cheats blog cover`}
                    title={post.title}
                    width={1920}
                    height={1080}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ padding: '18px 18px 22px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                    }}>{post.category}</span>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                      textTransform: 'uppercase',
                      margin: 0,
                    }}>{post.title}</h3>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      margin: 0,
                    }}>{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Extra crawlable plain link list (always in HTML for bots) */}
        <nav aria-label="All Sand Cheats blog posts" style={{ marginTop: 36 }}>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gap: 8,
          }}>
            {BLOG_META.map((post) => (
              <li key={`list-${post.slug}`}>
                <a
                  href={`/blog/${post.slug}`}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'underline',
                    textUnderlineOffset: 3,
                  }}
                >
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
