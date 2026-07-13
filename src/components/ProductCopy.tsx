import type { ReactNode } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { ClusterLinks } from './ClusterLinks';
import { MEDIA, SeoImage } from '../media';

const ZADEYO_STORE = 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fsand-raiders-of-sophie';

const sectionPad = {
  maxWidth: 880,
  margin: '0 auto',
  padding: `0 max(16px, env(safe-area-inset-right), 4vw) 0 max(16px, env(safe-area-inset-left), 4vw)`,
} as const;

function BlockHeading({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <p className="section-label" style={{ marginBottom: 14 }}>{label}</p>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
        letterSpacing: '-0.02em',
        color: 'var(--text-primary)',
        textTransform: 'uppercase',
        lineHeight: 1.1,
      }}>
        {title}
      </h2>
    </div>
  );
}

function Body({ children }: { children: ReactNode }) {
  return (
    <div style={{
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      color: 'var(--text-secondary)',
      lineHeight: 1.85,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }}>
      {children}
    </div>
  );
}

export function ProductCopy() {
  return (
    <>
      <section id="about-cheat" style={{ background: 'var(--bg-void)', padding: 'clamp(72px, 9vw, 110px) 0' }}>
        <div style={sectionPad}>
          <AnimatedSection>
            <BlockHeading label="Product Info" title="Information about Sand Cheats" />
            <figure style={{
              margin: '0 0 24px',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid var(--border-ghost)',
              aspectRatio: '16 / 9',
            }}>
              <SeoImage src={MEDIA.playerEsp.src} fallback={MEDIA.playerEsp.fallback} alt={MEDIA.playerEsp.alt} loading="lazy" />
            </figure>
            <Body>
              <p>
                Sand Cheats is our private Legit ESP and wallhack service. We keep the loader updated after every client
                change so your overlays stay aligned with the live build.
              </p>
              <p>
                There are no Rage features and no aimbot. You get visual ESP only: Enemy Box ESP, Enemy Line, Enemy Distance ESP,
                Enemy Health ESP, Enemy Name, Skeleton ESP, Item ESP, Portal ESP, Ores ESP, Traps ESP, Chests ESP, and
                Customizable ESP Colors.
              </p>
              <p>
                The menu is available in English and Russian. Keep the loader current after every patch — outdated builds
                are the usual failure mode.
              </p>
              <p>
                External Legit ESP, priced at $35/month, delivered through Zadeyo after checkout.
              </p>
            </Body>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28 }}>
              <a
                href={ZADEYO_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: 'inline-flex', fontSize: '0.9375rem', padding: '14px 28px' }}
              >
                Purchase Now
              </a>
              <a
                href="#esp"
                className="btn-ghost"
                style={{ display: 'inline-flex', fontSize: '0.9375rem', padding: '14px 28px' }}
              >
                See All Features
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="product-features" style={{ background: 'var(--bg-base)', padding: 'clamp(72px, 9vw, 110px) 0' }}>
        <div style={sectionPad}>
          <AnimatedSection>
            <p className="section-label" style={{ marginBottom: 14 }}>Features</p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              lineHeight: 1.05,
              marginBottom: 40,
            }}>
              Built around ESP and wallhack.
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass-card" style={{
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(24px, 4vw, 36px)',
              marginBottom: 20,
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                marginBottom: 16,
              }}>
                ESP / Wallhack Options
              </h3>
              <figure style={{
                margin: '0 0 20px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-ghost)',
                aspectRatio: '16 / 9',
              }}>
                <SeoImage src={MEDIA.mobEsp.src} alt={MEDIA.mobEsp.alt} />
              </figure>
              <Body>
                <p>
                  ESP / Wallhack modes give you full vision through walls and terrain — marking players, mobs, chests,
                  and loot so you can act before a fight starts. Every setting stays readable inside a clean menu.
                </p>
                <p>
                  Our developers tune overlays for clarity: spot ambushes early, path toward high-value loot, and skip
                  empty rooms. The service is updated whenever a new client build ships. Active maintenance is part of the subscription.
                </p>
              </Body>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="glass-card" style={{
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(24px, 4vw, 36px)',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                marginBottom: 16,
              }}>
                World &amp; Misc Options
              </h3>
              <figure style={{
                margin: '0 0 20px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-ghost)',
                aspectRatio: '16 / 9',
              }}>
                <SeoImage src={MEDIA.playerEsp.src} alt={MEDIA.playerEsp.alt} />
              </figure>
              <Body>
                <p>
                  Sand Cheats is a visual ESP suite — no aimbot. You get enemy box ESP, enemy line, distance, health, names,
                  and skeleton overlays, plus item, portal, ore, trap, and chest ESP. Customizable ESP colors keep every
                  label readable.
                </p>
                <p>
                  Per-feature toggles let you tailor the setup. Our support team helps you install and dial in settings
                  so you can start using the overlays immediately.
                </p>
              </Body>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section style={{ background: 'var(--bg-void)', padding: 'clamp(72px, 9vw, 110px) 0' }}>
        <div style={sectionPad}>
          <AnimatedSection>
            <BlockHeading label="Trust" title="Quality and Security" />
            <Body>
              <p>
                Quality and security is the base. Private-quality external ESP, kept current with continuous loader updates
                for Easy Anti-Cheat and live patches.
              </p>
              <p>
                Thousands of players already trust Zadeyo delivery and Sand Cheats support. Questions or setup issues?
                Message on Discord, use the guides on your order page, or open a ticket — we work around the clock.
              </p>
              <p>
                Choose Sand Cheats today. Instant delivery after checkout.
              </p>
            </Body>
          </AnimatedSection>
        </div>
      </section>

      <section style={{ background: 'var(--bg-base)', padding: 'clamp(72px, 9vw, 110px) 0' }}>
        <div style={sectionPad}>
          <AnimatedSection>
            <BlockHeading label="Coverage" title="A Wide Range of Features" />
            <Body>
              <p>
                Looking for wipe-ready visuals? Sand Cheats on Zadeyo covers Enemy Box ESP, Enemy Line, Distance, Health,
                Names, Skeleton ESP, Item ESP, Portal ESP, Ores ESP, Traps ESP, Chests ESP, and customizable ESP colors —
                with no aimbot.
              </p>
              <p>
                Whether you want faster loot routes, safer trap avoidance, or clearer PvP reads, our developers keep the
                overlays updated for the latest client. Support stays ready after every patch.
              </p>
            </Body>
          </AnimatedSection>
        </div>
      </section>

      <section style={{ background: 'var(--bg-deep)', padding: 'clamp(72px, 9vw, 110px) 0' }}>
        <div style={sectionPad}>
          <AnimatedSection>
            <BlockHeading label="Support" title="Fast and Reliable Support" />
            <Body>
              <p>
                We supply strong ESP and the support to match. Discord help is open whenever something goes wrong, and your
                Zadeyo order page keeps loader downloads and instructions in one place.
              </p>
              <p>
                Installation issue, Windows setting, or product question — we stay with you until it is solved. Quality
                applies to every part of the experience, including how fast you get answers.
              </p>
            </Body>
            <a
              href="https://discord.gg/zadeyo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ marginTop: 28, display: 'inline-flex', fontSize: '0.9375rem', padding: '14px 28px' }}
            >
              Join Sand Cheats Discord Support
            </a>
          </AnimatedSection>
        </div>
      </section>

      <section style={{ background: 'var(--bg-void)', padding: 'clamp(72px, 9vw, 110px) 0' }}>
        <div style={sectionPad}>
          <AnimatedSection>
            <BlockHeading label="Experience" title="Easy-to-Use Interface" />
            <Body>
              <p>
                We keep the site and the cheat simple so players with no technical background can get in fast. Choose your
                plan, buy on Zadeyo, download the loader from your order page, and follow the short setup guide.
              </p>
              <p>
                The in-game menu follows the same idea: clear toggles, readable ESP options, and settings that do not
                require a tutorial. Simple setup. Simple controls. Stronger overlays.
              </p>
            </Body>
            <ClusterLinks title="Next steps — Sand Cheats guides" maxGuides={5} />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
