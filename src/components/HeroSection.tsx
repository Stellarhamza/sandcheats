import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { MEDIA, SeoImage } from '../media';

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section style={{
      position: 'relative',
      minHeight: 'min(100dvh, 100vh)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: '#000',
      paddingBottom: 'clamp(48px, 12dvh, 120px)',
    }}>
      {/* Full-bleed ESP screenshot background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        <SeoImage
          src={MEDIA.heroLcp.src}
          fallback={MEDIA.heroLcp.fallback}
          alt={MEDIA.heroLcp.alt}
          loading="eager"
          fetchPriority="high"
          width={1400}
          height={788}
          sizes="100vw"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1.04)',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Dark overlay — heavier on left for text legibility */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'linear-gradient(90deg, rgba(6,4,9,0.97) 0%, rgba(6,4,9,0.85) 35%, rgba(6,4,9,0.5) 60%, rgba(6,4,9,0.35) 100%)',
        pointerEvents: 'none',
      }} aria-hidden="true" />

      {/* Grid overlay */}
      <div className="grid-overlay" style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        opacity: 0.6,
      }} aria-hidden="true" />

      {/* Orb behind text on left */}
      <div style={{
        position: 'absolute', zIndex: 2,
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)',
        filter: 'blur(90px)',
        left: '-5%', top: '10%',
        pointerEvents: 'none',
        animation: 'orb-drift-2 13s ease-in-out infinite',
      }} aria-hidden="true" />

      {/* Content — positioned to the left */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: 1280,
        margin: '0 auto',
        padding: `clamp(96px, 22dvh, 260px) max(16px, env(safe-area-inset-right)) clamp(28px, 7dvh, 72px) max(16px, env(safe-area-inset-left))`,
        display: 'flex',
        justifyContent: 'flex-start',
      }}>
        <div style={{
          maxWidth: 640,
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}>
          {/* Status badge */}
          <div style={{ animation: 'fadeUp 0.7s ease both', animationDelay: '0s' }}>
            <div className="glass-card" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '7px 16px', borderRadius: '999px', marginBottom: '28px',
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: 'var(--accent)', flexShrink: 0,
                animation: 'pulse-dot 2s ease-in-out infinite',
              }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {t('hero.status')}
              </span>
            </div>
          </div>

          {/* H1 — primary SEO heading (one per homepage) */}
          <div style={{ animation: 'fadeUp 0.7s ease both', animationDelay: '0.1s' }}>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              marginBottom: '22px',
            }}>
              <span className="gradient-text" style={{ display: 'block', fontSize: 'clamp(1.65rem, 6.2vw, 5.2rem)', lineHeight: 1.05, wordBreak: 'break-word' }}>
                Dark And Darker Cheats
              </span>
              <span style={{ display: 'block', color: 'var(--text-primary)', fontSize: 'clamp(1.35rem, 3vw, 2.6rem)', lineHeight: 1.2, marginTop: '10px' }}>
                Aimbot, ESP &amp; Wallhack – DND
              </span>
            </h1>
          </div>

          {/* Sub */}
          <div style={{ animation: 'fadeUp 0.7s ease both', animationDelay: '0.2s' }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}>
              {t('hero.description')}
            </p>
          </div>

          {/* CTAs */}
          <div style={{ animation: 'fadeUp 0.7s ease both', animationDelay: '0.3s', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="https://zadeyo.com/products/dark-and-darker-cheats"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.9375rem', padding: '15px 32px' }}
            >
              {t('hero.cta')}
            </a>
            <Link to="/buy" className="btn-ghost" style={{ fontSize: '0.9375rem', padding: '15px 28px' }}>
              See pricing &amp; features
            </Link>
            <a href="#esp" className="btn-ghost" style={{ fontSize: '0.9375rem', padding: '15px 28px' }}>
              {t('hero.features')} ↓
            </a>
          </div>

          {/* Trust line */}
          <div style={{ animation: 'fadeUp 0.7s ease both', animationDelay: '0.35s' }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.7rem',
              color: 'var(--text-muted)', marginTop: '16px', letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>
              {t('hero.trust')}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: 'max(20px, env(safe-area-inset-bottom))',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce-y 2s ease-in-out infinite',
        opacity: 0.3,
        zIndex: 10,
      }} aria-hidden="true">
        <svg width="18" height="28" viewBox="0 0 20 32" fill="none">
          <rect x="1" y="1" width="18" height="30" rx="9" stroke="var(--accent)" strokeWidth="1.5"/>
          <rect x="9" y="6" width="2" height="8" rx="1" fill="var(--accent)"/>
        </svg>
      </div>
    </section>
  );
}
