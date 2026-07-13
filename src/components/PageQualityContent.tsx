import { HOME_ARTICLE } from '../seo/homeArticle';
import { AnimatedSection } from './AnimatedSection';

function withStrong(text: string) {
  return text
    .split(/(Sand Cheats|SAND Raiders of Sophie|sand cheats|\bESP\b|wallhack)/gi)
    .map((part, i) => {
      if (/^(Sand Cheats|SAND Raiders of Sophie|sand cheats|ESP|wallhack)$/i.test(part)) {
        return <strong key={`${part}-${i}`}>{part}</strong>;
      }
      return part;
    });
}

/** Visible long-form content so SEO tools detect paragraphs + 500+ words */
export function PageQualityContent() {
  return (
    <section
      id="sand-cheats-overview"
      style={{
        background: 'var(--bg-deep)',
        padding: 'clamp(64px, 8vw, 96px) 0',
      }}
    >
      <div
        style={{
          maxWidth: 880,
          margin: '0 auto',
          padding: `0 max(16px, env(safe-area-inset-right), 4vw) 0 max(16px, env(safe-area-inset-left), 4vw)`,
        }}
      >
        <AnimatedSection>
          <p className="section-label" style={{ marginBottom: 14 }}>
            Sand Cheats Overview
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              marginBottom: 22,
            }}
          >
            {HOME_ARTICLE.h2}
          </h2>
          <article
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.85,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {HOME_ARTICLE.paragraphs.map((text) => (
              <p key={text.slice(0, 48)}>{withStrong(text)}</p>
            ))}
            {HOME_ARTICLE.h3s.map((block) => (
              <div key={block.title} style={{ marginTop: 8 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                    marginBottom: 10,
                  }}
                >
                  {block.title}
                </h3>
                <p>{withStrong(block.text)}</p>
              </div>
            ))}
          </article>
        </AnimatedSection>
      </div>
    </section>
  );
}
