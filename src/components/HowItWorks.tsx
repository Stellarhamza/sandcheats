import { AnimatedSection } from './AnimatedSection';
import { MEDIA, SeoImage } from '../media';

const steps = [
  {
    num: '01',
    title: 'Purchase & Download',
    desc: 'Complete your purchase on the Zadeyo web checkout. Right after payment, your order page shows the loader download and setup—plus a video guide.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Adjust Windows Settings',
    desc: 'The cheat is external and requires turning off Core Isolation and exploit protection. Step-by-step guide provided — takes under 2 minutes.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Load & Dominate',
    desc: 'Open the loader, start the client, and press OK. ESP is active — overlays ready for every run.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section style={{ background: 'var(--bg-deep)', padding: 'clamp(80px, 10vw, 120px) 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(168,85,247,0.05) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} aria-hidden="true" />

      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: `0 max(16px, env(safe-area-inset-right), 4vw) 0 max(16px, env(safe-area-inset-left), 4vw)`,
        position: 'relative',
      }}
      >
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 56px)' }}>
            <p className="section-label" style={{ justifyContent: 'center', marginBottom: '18px' }}>How It Works</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              lineHeight: 1.05,
              marginBottom: 24,
            }}>
              Up and running in minutes.
            </h2>
            <figure style={{
              margin: '0 auto',
              maxWidth: 920,
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid var(--border-ghost)',
              aspectRatio: '16 / 9',
            }}>
              <SeoImage src={MEDIA.playerEsp.src} alt={MEDIA.playerEsp.alt} />
            </figure>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          {/* Connector line between steps on desktop */}
          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 'clamp(20px, 4vw, 48px)',
              alignItems: 'start',
            }}>
              {steps.map((step, i) => (
                <div key={step.num} style={{ position: 'relative' }}>
                  {/* Connecting line */}
                  {i < steps.length - 1 && (
                    <div style={{
                      display: 'none',
                      position: 'absolute',
                      top: '38px',
                      left: 'calc(50% + 44px)',
                      right: 'calc(-50% + 44px)',
                      height: '1px',
                      background: 'linear-gradient(90deg, var(--accent), transparent)',
                      opacity: 0.3,
                    }} aria-hidden="true" />
                  )}

                  <div style={{ textAlign: 'center', padding: '0 8px' }}>
                    {/* Step number decorative bg */}
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 900,
                      fontSize: 'clamp(5rem, 10vw, 8rem)',
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      background: 'linear-gradient(135deg, var(--accent-bright) 0%, var(--accent) 60%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      opacity: 0.08,
                      position: 'absolute',
                      top: '-20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      userSelect: 'none',
                      whiteSpace: 'nowrap',
                      pointerEvents: 'none',
                    }} aria-hidden="true">{step.num}</div>

                    {/* Icon circle */}
                    <div style={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: 'rgba(168,85,247,0.1)',
                      border: '2px solid var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 22px',
                      position: 'relative',
                      zIndex: 1,
                      color: 'var(--accent)',
                      boxShadow: '0 0 24px rgba(168,85,247,0.2)',
                    }}>
                      {step.icon}
                    </div>

                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                      letterSpacing: '0.02em',
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                      marginBottom: '12px',
                      position: 'relative',
                      zIndex: 1,
                    }}>{step.title}</h3>

                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.75,
                      position: 'relative',
                      zIndex: 1,
                      maxWidth: '280px',
                      margin: '0 auto',
                    }}>{step.desc}</p>

                    {/* Step indicator */}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginTop: '18px',
                      padding: '4px 14px',
                      borderRadius: '999px',
                      background: 'rgba(168,85,247,0.08)',
                      border: '1px solid rgba(168,85,247,0.18)',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}>Step {i + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
