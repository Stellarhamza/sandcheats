import { useState, type ReactNode } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { MEDIA, SHOWCASE_IMAGES, SeoImage } from '../media';

const enemyVisuals: { name: string; desc: string; icon: ReactNode }[] = [
  {
    name: 'Enemy Box ESP',
    desc: '2D boxes around enemies through walls so you spot threats before they see you.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="15" y="3" width="8" height="8" rx="1.5"/>
        <rect x="3" y="15" width="8" height="8" rx="1.5"/><rect x="15" y="15" width="8" height="8" rx="1.5"/>
      </svg>
    ),
  },
  {
    name: 'Enemy Line',
    desc: 'Draw snap lines toward enemies so you always know the shortest path into a fight.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="5" cy="21" r="2.5"/><circle cx="21" cy="5" r="2.5"/>
        <line x1="7" y1="19" x2="19" y2="7"/>
      </svg>
    ),
  },
  {
    name: 'Enemy Distance ESP',
    desc: 'Exact range in feet to every enemy so you know when to push, hold, or extract.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="5" cy="13" r="3"/><circle cx="21" cy="13" r="3"/>
        <line x1="8" y1="13" x2="18" y2="13" strokeDasharray="2.5 2"/>
        <line x1="11" y1="10" x2="11" y2="16"/><line x1="15" y1="10" x2="15" y2="16"/>
      </svg>
    ),
  },
  {
    name: 'Enemy Health ESP',
    desc: 'Live health bars on enemies so you prioritize weak targets and avoid tanky pushes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="4" y="10" width="18" height="6" rx="2"/>
        <rect x="4" y="10" width="12" height="6" rx="2" fill="currentColor" fillOpacity="0.35"/>
      </svg>
    ),
  },
  {
    name: 'Enemy Name',
    desc: 'Show enemy names on the overlay for clear identification in crowded dungeon fights.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="7" width="20" height="12" rx="2"/>
        <line x1="7" y1="13" x2="19" y2="13"/>
      </svg>
    ),
  },
  {
    name: 'Skeleton ESP',
    desc: 'Full bone overlays so you track pose, movement, and aim angles through walls.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="13" cy="4" r="2.5"/>
        <line x1="13" y1="6.5" x2="13" y2="14"/>
        <line x1="8" y1="9" x2="13" y2="11"/><line x1="18" y1="9" x2="13" y2="11"/>
        <line x1="13" y1="14" x2="9" y2="21"/><line x1="13" y1="14" x2="17" y2="21"/>
      </svg>
    ),
  },
];

const worldVisuals: { name: string; desc: string }[] = [
  { name: 'Item ESP', desc: 'Highlight gear and valuables through walls so you never miss high-value loot.' },
  { name: 'Portal ESP', desc: 'Mark portals and extract routes so you always know your way out.' },
  { name: 'Ores ESP', desc: 'Reveal ore nodes for faster farming and crafting material runs.' },
  { name: 'Traps ESP', desc: 'Expose floor spikes and traps before they end your dungeon run.' },
  { name: 'Chests ESP', desc: 'See chests through walls and path straight to the best containers.' },
];

const miscFeatures: { name: string; desc: string; icon: ReactNode }[] = [
  {
    name: 'Customizable ESP Colors',
    desc: 'Tune every ESP color to stay readable in dark caves, torch light, or busy PvP rooms.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="13" cy="13" r="4" fill="currentColor" fillOpacity="0.2"/>
        <path d="M13 2 L13 5"/><path d="M13 21 L13 24"/>
        <path d="M2 13 L5 13"/><path d="M21 13 L24 13"/>
        <path d="M5.5 5.5 L7.5 7.5"/><path d="M18.5 18.5 L20.5 20.5"/>
        <path d="M20.5 5.5 L18.5 7.5"/><path d="M7.5 18.5 L5.5 20.5"/>
      </svg>
    ),
  },
];

function FeatureCard({
  name,
  desc,
  icon,
  accentColor = 'var(--accent)',
}: {
  name: string;
  desc: string;
  icon: ReactNode;
  accentColor?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="feature-card glass-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: '22px 20px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'transform 0.25s ease, border-color 0.25s ease',
        transform: hovered ? 'translateY(-3px)' : 'none',
        borderColor: hovered ? 'var(--border-bright)' : undefined,
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '180px', height: '180px',
        background: `radial-gradient(circle at top left, ${hovered ? 'rgba(168,85,247,0.15)' : 'rgba(168,85,247,0.05)'}, transparent 65%)`,
        pointerEvents: 'none',
        transition: 'background 0.3s ease',
      }} aria-hidden="true" />

      <div style={{
        width: 48,
        height: 48,
        borderRadius: '10px',
        background: hovered ? 'rgba(168,85,247,0.16)' : 'rgba(168,85,247,0.08)',
        border: `1px solid ${hovered ? 'rgba(168,85,247,0.3)' : 'rgba(168,85,247,0.15)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
        color: accentColor,
        transition: 'background 0.25s ease, border-color 0.25s ease',
        flexShrink: 0,
      }}>
        {icon}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '1.05rem',
        letterSpacing: '0.02em',
        color: 'var(--text-primary)',
        textTransform: 'uppercase',
        marginBottom: '8px',
        position: 'relative',
      }}>{name}</h3>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.875rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
        position: 'relative',
      }}>{desc}</p>
    </div>
  );
}

function BulletItem({ label, desc }: { label: string; desc: string }) {
  return (
    <li style={{
      display: 'flex',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: '0.9rem',
      color: 'var(--text-secondary)',
      lineHeight: 1.7,
      marginBottom: 8,
    }}>
      <span style={{
        color: 'var(--accent)',
        fontWeight: 700,
        flexShrink: 0,
        marginTop: 2,
      }}>•</span>
      <span>
        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{label}</strong>
        {' – '}
        {desc}
      </span>
    </li>
  );
}

export function FeaturesGrid() {
  return (
    <>
      <section id="esp" style={{
        background: 'var(--bg-deep)',
        padding: 'clamp(80px, 10vw, 120px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '20%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%',
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
            <div style={{ marginBottom: 'clamp(32px, 4vw, 48px)' }}>
              <p className="section-label" style={{ marginBottom: 18 }}>Visuals</p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                lineHeight: 1.05,
                marginBottom: 16,
              }}>
                Dark and Darker ESP{' '}
                <span className="gradient-text">Total Awareness</span>{' '}
                in Every Dungeon
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                color: 'var(--text-secondary)',
                maxWidth: 720,
                lineHeight: 1.75,
                marginBottom: 12,
              }}>
                Pure visual ESP — no aimbot. Toggle enemy boxes, skeleton, health, names, and distance, then layer item,
                portal, ore, trap, and chest ESP when you need the full dungeon read.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                color: 'var(--text-secondary)',
                maxWidth: 720,
                lineHeight: 1.75,
              }}>
                Keep it minimal for clean extracts, or turn everything on when the lobby is stacked.
                Customizable ESP colors keep every label readable in torch light and pitch-black rooms.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: 'clamp(12px, 2vw, 18px)',
              marginBottom: 'clamp(44px, 6vw, 64px)',
            }}>
              {SHOWCASE_IMAGES.map((img) => (
                <figure
                  key={img.src}
                  style={{
                    margin: 0,
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-ghost)',
                    aspectRatio: '16 / 10',
                    background: 'var(--bg-elevated)',
                  }}
                >
                  <SeoImage src={img.src} alt={img.alt} />
                </figure>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div
              className="features-split-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.6fr)',
                gap: 'clamp(40px, 5vw, 72px)',
                alignItems: 'start',
                marginBottom: 'clamp(48px, 7vw, 80px)',
              }}
            >
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.15rem, 2vw, 1.5rem)',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  marginBottom: 20,
                }}>
                  Enemy Visuals
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {enemyVisuals.map(f => (
                    <BulletItem key={f.name} label={f.name} desc={f.desc} />
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.8vw, 18px)' }}>
                <figure style={{
                  margin: 0,
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-ghost)',
                  aspectRatio: '16 / 9',
                }}>
                  <SeoImage src={MEDIA.playerEsp.src} alt={MEDIA.playerEsp.alt} />
                </figure>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 160px), 1fr))',
                  gap: 'clamp(12px, 1.8vw, 18px)',
                }}>
                  {enemyVisuals.map(f => <FeatureCard key={f.name} {...f} />)}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div style={{
              borderTop: '1px solid var(--border-ghost)',
              paddingTop: 'clamp(40px, 5vw, 60px)',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.15rem, 2vw, 1.5rem)',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
                marginBottom: 12,
              }}>
                World Visuals –{' '}
                <span className="gradient-text">Items, Portals, Ores, Traps &amp; Chests</span>
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: 680,
                marginBottom: 24,
              }}>
                Dark and Darker is about looting the dungeon and extracting alive. See every container, trap, ore node, and portal before you commit.
              </p>
              <div
                className="features-split-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
                  gap: 'clamp(24px, 4vw, 40px)',
                  alignItems: 'center',
                }}
              >
                <div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}>
                    {worldVisuals.map(f => (
                      <BulletItem key={f.name} label={f.name} desc={f.desc} />
                    ))}
                  </ul>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                  }}>
                    No more blind looting.{' '}
                    <strong style={{ color: 'var(--text-primary)' }}>No more walking into traps.</strong>{' '}
                    Just clean intel and smarter extractions.
                  </p>
                </div>
                <figure style={{
                  margin: 0,
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-ghost)',
                  aspectRatio: '16 / 10',
                }}>
                  <SeoImage src={MEDIA.lootEsp.src} alt={MEDIA.lootEsp.alt} />
                </figure>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="misc" style={{
        background: 'var(--bg-base)',
        padding: 'clamp(80px, 10vw, 120px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', bottom: '10%', left: '-8%', width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,132,252,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)', pointerEvents: 'none',
        }} aria-hidden="true" />

        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: `0 max(16px, env(safe-area-inset-right), 4vw) 0 max(16px, env(safe-area-inset-left), 4vw)`,
          position: 'relative',
        }}>
          <AnimatedSection>
            <div style={{ marginBottom: 'clamp(44px, 6vw, 64px)' }}>
              <p className="section-label" style={{ marginBottom: 18 }}>Misc</p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                lineHeight: 1.05,
                marginBottom: 16,
              }}>
                Customizable ESP Colors{' '}
                <span className="gradient-text">Your Overlay</span>
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                color: 'var(--text-secondary)',
                maxWidth: 720,
                lineHeight: 1.75,
              }}>
                Dial in colors for enemies, loot, portals, traps, and chests so the overlay stays clear in every biome.
                No aimbot — just visuals you control.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div
              className="features-split-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
                gap: 'clamp(40px, 5vw, 72px)',
                alignItems: 'center',
              }}
            >
              <div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
                  {miscFeatures.map(f => (
                    <BulletItem key={f.name} label={f.name} desc={f.desc} />
                  ))}
                </ul>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                }}>
                  Match your playstyle — high-contrast for crowded PvP, or softer tones for long loot routes.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <figure style={{
                  margin: 0,
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-ghost)',
                  aspectRatio: '16 / 10',
                }}>
                  <SeoImage src={MEDIA.mobEsp.src} alt={MEDIA.mobEsp.alt} />
                </figure>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))',
                  gap: 16,
                }}>
                  {miscFeatures.map(f => (
                    <FeatureCard key={f.name} {...f} accentColor="var(--accent-bright)" />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
