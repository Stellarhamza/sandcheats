import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { ClusterLinks } from '../components/ClusterLinks';
import { SHOWCASE_IMAGES, SeoImage } from '../media';

const ZADEYO = 'https://zadeyo.com/products/dark-and-darker-cheats';
const DISCORD = 'https://discord.gg/zadeyo';

const checklist = [
  { label: 'Enemy Box ESP', benefit: 'See enemy bounding boxes through walls so you know where fights start before you round a corner.' },
  { label: 'Enemy Line', benefit: 'Snap lines point toward threats so you can prioritize the closest danger in cluttered rooms.' },
  { label: 'Enemy Distance ESP', benefit: 'Exact range on every enemy helps you decide push, hold, or extract.' },
  { label: 'Enemy Health ESP', benefit: 'Live health bars show who is weak enough to finish versus who still has a fight left.' },
  { label: 'Enemy Name', benefit: 'Names on the overlay help you track specific players across a multi-room fight.' },
  { label: 'Skeleton ESP', benefit: 'Bone tracking through walls makes body position and peek angles readable at a glance.' },
  { label: 'Item ESP', benefit: 'Gear and valuables highlighted so loot priority is obvious during short extract windows.' },
  { label: 'Portal ESP', benefit: 'Portals and extract routes marked so you can leave before a third party arrives.' },
  { label: 'Ores ESP', benefit: 'Ore nodes highlighted for efficient farming runs between PvP fights.' },
  { label: 'Traps ESP', benefit: 'Floor spikes and traps revealed so you stop dying to map hazards you never saw.' },
  { label: 'Chests ESP', benefit: 'Chests visible through walls so you clear high-value rooms without guessing.' },
  { label: 'Customizable ESP Colors', benefit: 'Tune every overlay color to match your visibility needs and map lighting.' },
];

const faqs: { q: string; a: string }[] = [
  {
    q: 'Does this Dark And Darker cheat include aimbot?',
    a: 'No. DarkerCheats for Dark and Darker is Legit-style ESP and wallhack only — enemy, item, portal, ore, trap, and chest visuals. There is no Rage mode and no aimbot in the live product.',
  },
  {
    q: 'Can I use my license on more than one PC?',
    a: 'Each license is tied to one hardware ID (HWID). To move to a new PC, open a ticket in the Zadeyo Discord and support will handle the transfer.',
  },
  {
    q: 'Is setup difficult?',
    a: 'Usually under a minute. After checkout on Zadeyo you get the loader and instructions. If something fails, Discord support walks you through Windows version and loader steps.',
  },
  {
    q: 'Will it hurt FPS?',
    a: 'It is an external overlay process. Most users report no meaningful FPS drop compared with playing without the tool.',
  },
  {
    q: 'What happens after a Dark and Darker wipe or patch?',
    a: 'Open your Zadeyo order page and download the newest loader. Updates are published after Ironmace ships a new build. Running an outdated loader increases risk — keep it current.',
  },
  {
    q: 'Is this guaranteed undetected or ban-proof?',
    a: 'No honest provider can guarantee zero bans. We focus on external Legit ESP, wipe-aligned updates, and clear support. Risk still exists from reports, outdated loaders, and account behavior. Not affiliated with Ironmace Games.',
  },
  {
    q: 'What payment methods and delivery do you use?',
    a: 'Checkout is on zadeyo.com (cards, crypto, and other methods shown at payment). Loader access is delivered through your Zadeyo order page after purchase. Price shown here is $35/month.',
  },
  {
    q: 'The overlay does not show. What now?',
    a: 'If you never see “Load game & press OK inside the match,” update Windows to 24H2 or 25H2 on Windows 11 and re-download the latest loader. Full steps are in Discord.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--border-ghost)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '22px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          gap: '16px',
          textAlign: 'left',
        }}
        aria-expanded={open}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: 'clamp(0.875rem, 2vw, 1rem)',
          color: 'var(--text-primary)',
          lineHeight: 1.4,
        }}>
          {q}
        </span>
        <span style={{
          flexShrink: 0,
          width: 30,
          height: 30,
          borderRadius: '50%',
          border: '1px solid var(--border-dim)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent)',
          fontSize: '1.1rem',
          fontWeight: 300,
          transition: 'transform 0.3s ease, background 0.2s ease, border-color 0.2s ease',
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
          background: open ? 'rgba(168,85,247,0.1)' : 'transparent',
          borderColor: open ? 'var(--border-bright)' : 'var(--border-dim)',
        }}>+</span>
      </button>
      <div style={{
        maxHeight: open ? '500px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(.25,.1,.25,1)',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.75,
          paddingBottom: '22px',
        }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export function StorePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* 1. Purpose statement */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-void)',
        padding: `clamp(20px, 3vw, 36px) max(16px, env(safe-area-inset-right), 5vw) clamp(48px, 8vw, 80px) max(16px, env(safe-area-inset-left), 5vw)`,
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -60%)',
          width: '700px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.16) 0%, transparent 70%)',
          filter: 'blur(70px)', pointerEvents: 'none',
        }} aria-hidden="true" />
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} aria-hidden="true" />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
          <p className="section-label" style={{ justifyContent: 'center', marginBottom: '18px' }}>Private Dark And Darker Cheats</p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(2.2rem, 7vw, 5.2rem)',
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            lineHeight: 1.05,
            color: 'var(--text-primary)',
            marginBottom: '16px',
          }}>
            <span className="gradient-text">Buy Dark And Darker Cheats</span>
            <br />Aimbot, ESP &amp; Wallhack – DND
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--text-secondary)',
            marginBottom: '28px',
            lineHeight: 1.6,
          }}>
            For dungeon extract players who want clear enemy, loot, and hazard visuals on Ironmace&apos;s Dark and Darker —
            Legit ESP only, wipe-aligned loader updates, English &amp; Russian menu.
          </p>

          {/* 2. Proof */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
            gap: 10,
            marginBottom: 28,
            maxWidth: 720,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            {SHOWCASE_IMAGES.map((img, i) => (
              <figure
                key={img.src}
                style={{
                  margin: 0,
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-ghost)',
                  aspectRatio: '16 / 10',
                }}
              >
                <SeoImage
                  src={img.src}
                  fallback={img.fallback}
                  alt={img.alt}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  fetchPriority={i === 0 ? 'high' : 'low'}
                  width={640}
                  height={400}
                  sizes="(max-width: 768px) 45vw, 220px"
                />
              </figure>
            ))}
          </div>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            maxWidth: 640,
            margin: '0 auto 28px',
            textAlign: 'left',
          }}>
            Screenshots above show the live overlay: skeleton / player ESP, loot &amp; chest highlights, and mob / trap
            awareness. Product focus is Legit visuals — <strong style={{ color: 'var(--text-primary)' }}>no Rage, no aimbot</strong> —
            supported since Steam closed beta. Checkout and loader delivery happen on Zadeyo.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '6px 14px', borderRadius: '999px',
              border: '1px solid rgba(74,222,128,0.2)',
              background: 'rgba(74,222,128,0.05)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px rgba(74,222,128,0.8)' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, color: '#86efac', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Wipe updates · External ESP
              </span>
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '6px 14px', borderRadius: '999px',
              border: '1px solid var(--border-ghost)',
              background: 'rgba(168,85,247,0.04)',
            }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Steam · Windows 10 &amp; 11
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3–6. Features, requirements, pricing, trust */}
      <section style={{
        background: 'var(--bg-base)',
        padding: `clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-right), 4vw) clamp(60px, 8vw, 100px) max(16px, env(safe-area-inset-left), 4vw)`,
      }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(40px, 5vw, 72px)',
          alignItems: 'start',
        }}>
          <AnimatedSection>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                marginBottom: '6px',
                lineHeight: 1.05,
              }}>
                Features that change the run.
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                marginBottom: '28px',
                lineHeight: 1.6,
              }}>
                One $35/month subscription includes the full ESP set — no feature tiers.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
                {checklist.map(item => (
                  <li key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      background: 'rgba(168,85,247,0.12)',
                      border: '1px solid rgba(168,85,247,0.28)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                        <polyline points="2,5.5 4,7.5 8,3" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{item.label}</strong>
                      <span style={{ color: 'var(--text-muted)' }}> — {item.benefit}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="glass-card" style={{ borderRadius: 'var(--radius-lg)', padding: '22px', marginTop: '32px' }}>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '0.6875rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  marginBottom: '14px',
                }}>
                  Requirements &amp; compatibility
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    ['Launcher', 'Steam'],
                    ['OS', 'Windows 10 (all builds) · Windows 11 up to 25H2'],
                    ['Type', 'External overlay — minimal performance impact'],
                    ['Anti-cheat', 'Easy Anti-Cheat — keep the loader updated after every wipe'],
                    ['Excluded', 'No aimbot / Rage · not a mobile or console build'],
                    ['Languages', 'English and Russian menu'],
                  ].map(([label, val]) => (
                    <div key={label} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        fontWeight: 600,
                        minWidth: '88px',
                        flexShrink: 0,
                      }}>{label}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass-card" style={{
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(28px, 4vw, 44px)',
              borderColor: 'var(--border-dim)',
              boxShadow: '0 0 80px rgba(168,85,247,0.1), inset 0 1px 0 rgba(255,255,255,0.04)',
              position: 'sticky',
              top: '84px',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '100px',
                background: 'linear-gradient(to bottom, rgba(168,85,247,0.07), transparent)',
                pointerEvents: 'none',
              }} aria-hidden="true" />

              <div style={{ position: 'relative' }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '10px',
                  }}>
                    Pricing &amp; delivery
                  </p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', justifyContent: 'center', marginBottom: '6px' }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 900,
                      fontSize: 'clamp(3.5rem, 8vw, 5rem)',
                      letterSpacing: '-0.04em',
                      background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 60%, #7c3aed 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1,
                    }}>$35</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-muted)' }}>/month</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    Includes full ESP set, wipe loader updates, and Discord support. Cancel on Zadeyo per their billing terms.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '14px' }}>
                  <a href={ZADEYO} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '16px' }}>
                    Buy on Zadeyo — $35/mo
                  </a>
                  <a href={DISCORD} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem' }}>
                    Ask support on Discord
                  </a>
                </div>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                  marginBottom: '20px',
                  lineHeight: 1.6,
                }}>
                  Instant loader link after payment · Renews monthly unless cancelled · Refunds follow Zadeyo store policy
                </p>

                <div className="glass-card" style={{ borderRadius: 'var(--radius-md)', padding: '14px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '1px' }}>
                      <path d="M9 1 L16 4 L16 9 C16 13 9 17 9 17 C9 17 2 13 2 9 L2 4 Z"/>
                      <polyline points="6,9 8,11 12,7"/>
                    </svg>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.7875rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                    }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Trust &amp; risk:</strong> Not affiliated with Ironmace Games.
                      No “100% safe” guarantee. Keep the loader updated after every wipe, avoid obvious report bait,
                      and use optional HWID spoofing only if you understand the trade-offs. Privacy and payment terms are on Zadeyo at checkout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. FAQ */}
      <section style={{
        background: 'var(--bg-deep)',
        padding: `clamp(80px, 10vw, 120px) max(16px, env(safe-area-inset-right), 4vw) clamp(80px, 10vw, 120px) max(16px, env(safe-area-inset-left), 4vw)`,
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(44px, 5vw, 60px)' }}>
              <p className="section-label" style={{ justifyContent: 'center', marginBottom: '18px' }}>FAQ</p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                lineHeight: 1.05,
              }}>
                Pre-sale questions answered.
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div style={{ borderTop: '1px solid var(--border-ghost)' }}>
              {faqs.map(faq => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
            </div>
          </AnimatedSection>

          {/* 8. Related routes */}
          <ClusterLinks
            title="Related guides and setup routes"
            includeHub={false}
            maxGuides={7}
          />
          <p style={{ marginTop: 16, fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}>
            <Link to="/" style={{ color: 'var(--accent-bright)' }}>Dark And Darker Cheats home</Link>
            {' · '}
            <Link to="/blog" style={{ color: 'var(--accent-bright)' }}>Full Dark And Darker cheat blog</Link>
            {' · '}
            <Link to="/#about-cheat" style={{ color: 'var(--accent-bright)' }}>Product information about DarkerCheats</Link>
          </p>
        </div>
      </section>
    </>
  );
}
