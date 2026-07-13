import { AnimatedSection } from './AnimatedSection';
import { MEDIA, SeoImage } from '../media';

export function SafetySection() {
  return (
    <section style={{
      background: 'var(--bg-base)',
      padding: 'clamp(80px, 10vw, 120px) 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '10%', left: '-5%', width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} aria-hidden="true" />

      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: `0 max(16px, env(safe-area-inset-right), 4vw) 0 max(16px, env(safe-area-inset-left), 4vw)`,
        position: 'relative',
      }}>
        <AnimatedSection>
          <div
            className="safety-split-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
              gap: 'clamp(40px, 6vw, 80px)',
              alignItems: 'stretch',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="section-label" style={{ marginBottom: 18 }}>Why Choose Us</p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
                marginBottom: 28,
              }}>
                Why Choose<br />
                <span className="gradient-text">DarkerCheats?</span>
              </h2>

              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}>
                <p>
                  When you choose DarkerCheats for Dark and Darker cheats, you&apos;re choosing quality, reliability, and
                  serious support. We have backed these Dark and Darker cheats since Steam closed beta — Legit-only ESP,
                  wipe-to-wipe updates, and no Rage features.
                </p>
                <p>
                  Discord support stays online for setup and wipe questions. We ship loader updates after Ironmace patches
                  as quickly as we can — often the same day a wipe lands. No provider can promise zero bans; we focus on
                  external Legit ESP and staying current.
                </p>
                <p>
                  Checkout and delivery stay fast: buy Dark and Darker cheats from DarkerCheats, get instant access to your
                  loader and setup guide, then dial in enemy ESP, chests, portals, traps, and colors for the dungeon.
                  Right now is as good a time as ever to start. Choose DarkerCheats. Start extracting.
                </p>
              </div>
            </div>

            <div
              className="safety-videos-col"
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(12px, 1.5vw, 20px)',
                height: '100%',
                minHeight: 220,
              }}
            >
              <div style={{
                position: 'absolute', inset: '-10%',
                background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
                filter: 'blur(50px)',
                pointerEvents: 'none',
                zIndex: 0,
              }} aria-hidden="true" />
              <div style={{
                flex: '1 1 0',
                minHeight: 160,
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 1,
                border: '1px solid var(--border-ghost)',
              }}>
                <SeoImage src={MEDIA.lootEsp.src} alt={MEDIA.lootEsp.alt} />
              </div>
              <div style={{
                flex: '1 1 0',
                minHeight: 160,
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 1,
                border: '1px solid var(--border-ghost)',
              }}>
                <SeoImage src={MEDIA.mobEsp.src} alt={MEDIA.mobEsp.alt} />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
