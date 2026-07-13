import type { ReactNode } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { ClusterLinks } from './ClusterLinks';
import { MEDIA, SeoImage } from '../media';

const ZADEYO_STORE = 'https://zadeyo.com/products/dark-and-darker-cheats';

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
      {/* Information about the cheat */}
      <section id="about-cheat" style={{ background: 'var(--bg-void)', padding: 'clamp(72px, 9vw, 110px) 0' }}>
        <div style={sectionPad}>
          <AnimatedSection>
            <BlockHeading label="Product Info" title="Information about the cheat" />
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
                On this page you can see the DarkerCheats ESP for Dark and Darker. We have been supporting this product
                since the closed beta test of the game on Steam, regularly updating and supplementing it after every wipe
                and client change.
              </p>
              <p>
                In our cheat you will not find Rage features — here is only safe functionality for playing in the Legit style.
                There is no aimbot. You get ESP for displaying players, mobs, items, portals, ores, traps, chests, and other
                dungeon objects: Enemy Box ESP, Enemy Line, Enemy Distance ESP, Enemy Health ESP, Enemy Name, Skeleton ESP,
                Item ESP, Portal ESP, Ores ESP, Traps ESP, and Chests ESP, plus Customizable ESP Colors.
              </p>
              <p>
                The setup uses a clear menu in English and Russian. We prioritize external Legit ESP and wipe-aligned
                updates so you can reduce risk — not eliminate it. Keep the loader current after every patch; outdated
                builds are the usual failure mode.
              </p>
              <p>
                DarkerCheats is an accessible external Dark and Darker ESP — wipe-ready, priced at $35/month, and
                delivered through Zadeyo after checkout. Not affiliated with Ironmace Games.
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

      {/* What Is Dark and Darker */}
      <section style={{ background: 'var(--bg-deep)', padding: 'clamp(72px, 9vw, 110px) 0' }}>
        <div style={sectionPad}>
          <AnimatedSection>
            <BlockHeading label="The Game" title="What Is Dark and Darker?" />
            <figure style={{
              margin: '0 0 24px',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid var(--border-ghost)',
              aspectRatio: '16 / 9',
            }}>
              <SeoImage src={MEDIA.lootEsp.src} alt={MEDIA.lootEsp.alt} loading="lazy" />
            </figure>
            <Body>
              <p>
                Dark and Darker is a hardcore fantasy extraction dungeon crawler from Ironmace Games.
                Players drop into dark, loot-filled dungeons as classes like Fighter, Wizard, Ranger, and more —
                each with different combat styles, gear progression, and survival risk.
              </p>
              <p>
                To survive, you must find gear, potions, and valuables while fighting monsters and other players.
                Extract successfully and you keep what you found. Die in the dungeon and you lose what you brought in.
                Maps are dense with traps, portals, chests, and PvPvE fights that punish bad information.
              </p>
              <p>
                Dark and Darker rewards map knowledge, loot awareness, and clean extracts. If you want to play it
                at full advantage, look at the Dark and Darker cheats available through DarkerCheats on Zadeyo —
                ESP, loot highlights, portals, traps, and chests built for the current wipe.
              </p>
            </Body>
            <a
              href={ZADEYO_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: 28, display: 'inline-flex', fontSize: '0.9375rem', padding: '14px 28px' }}
            >
              Purchase Now
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURES */}
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
              Built for every dungeon.
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
                  ESP / Wallhack — advanced modes that give you full vision through dungeon walls, doors, and terrain,
                  marking other players, mobs, chests, and loot so you can act strategically before a fight starts.
                  Every setting is built to stay readable and user-friendly, plugged into a clean menu for easy access.
                </p>
                <p>
                  This overlay has been tuned by our developers to help you climb extracts faster: spot ambushes early,
                  path toward high-value chests, and avoid empty rooms. The cheat is updated whenever Ironmace ships
                  a wipe or balance patch so it keeps working on the live client. We guarantee active maintenance.
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
                  DarkerCheats is a visual ESP suite for Dark and Darker — no aimbot. You get enemy box ESP, enemy line,
                  distance, health, names, and skeleton overlays, plus item, portal, ore, trap, and chest ESP for full
                  dungeon awareness. Customizable ESP colors keep every label readable in torch light or pitch black.
                </p>
                <p>
                  Awareness is the advantage. Range-friendly overlays and per-feature toggles let you tailor the setup
                  to your class and lobby. Our support team helps you install and dial in settings so you can start
                  winning extracts immediately.
                </p>
              </Body>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quality and Security */}
      <section style={{ background: 'var(--bg-void)', padding: 'clamp(72px, 9vw, 110px) 0' }}>
        <div style={sectionPad}>
          <AnimatedSection>
            <BlockHeading label="Trust" title="Quality and Security" />
            <Body>
              <p>
                Quality and security is not just a motto for us — it is the base. Private-quality external cheats.
                Built to a higher standard than throwaway loaders. And kept undetected with continuous updates for
                Easy Anti-Cheat and Ironmace wipe cycles.
              </p>
              <p>
                Thousands of players already trust Zadeyo delivery and DarkerCheats support. If you have questions
                or problems, you always have 24/7 help at your back. Looking to contact support? Message on our Discord,
                use the guides on your order page, or open a ticket — we work around the clock so you can play Dark and Darker
                with far less risk and far more confidence.
              </p>
              <p>
                Choose DarkerCheats today. Instant delivery after checkout. Start extracting.
              </p>
            </Body>
          </AnimatedSection>
        </div>
      </section>

      {/* Wide Range */}
      <section style={{ background: 'var(--bg-base)', padding: 'clamp(72px, 9vw, 110px) 0' }}>
        <div style={sectionPad}>
          <AnimatedSection>
            <BlockHeading label="Coverage" title="A Wide Range of Features" />
            <Body>
              <p>
                For Dark and Darker players searching for a suite of useful, wipe-ready cheats, looking no further than
                DarkerCheats on Zadeyo is the right call. Enemy box ESP, enemy line, distance, health, names, skeleton ESP,
                item ESP, portal ESP, ores ESP, traps ESP, chests ESP, and customizable ESP colors — with no aimbot.
              </p>
              <p>
                Whether you want faster loot routes, safer trap avoidance, or clearer PvP reads before you commit,
                our developers keep the visuals updated so they stay fully working on the latest Dark and Darker build.
                Beyond the feature list, we listen to what players need after each wipe and keep support ready —
                so you get the premium toolkit you came for, plus non-stop help when you need it.
              </p>
            </Body>
          </AnimatedSection>
        </div>
      </section>

      {/* Fast Support */}
      <section style={{ background: 'var(--bg-deep)', padding: 'clamp(72px, 9vw, 110px) 0' }}>
        <div style={sectionPad}>
          <AnimatedSection>
            <BlockHeading label="Support" title="Fast and Reliable Support" />
            <Body>
              <p>
                We supply not only a strong Dark and Darker ESP — we supply the support to match. Discord help
                is open whenever something goes wrong, and your Zadeyo order page keeps loader downloads and instructions
                in one place. Installation issue, Windows setting, or product question — we stay with you until it is solved.
              </p>
              <p>
                At DarkerCheats we believe quality applies to every part of the experience, including how fast you get answers.
                You receive an elite dungeon cheat and the support you need to make setup and play simple. Want other titles?
                Check the rest of the Zadeyo store after you grab Dark and Darker access.
              </p>
            </Body>
            <a
              href="https://discord.gg/zadeyo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ marginTop: 28, display: 'inline-flex', fontSize: '0.9375rem', padding: '14px 28px' }}
            >
              Join Discord Support
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Easy Interface */}
      <section style={{ background: 'var(--bg-void)', padding: 'clamp(72px, 9vw, 110px) 0' }}>
        <div style={sectionPad}>
          <AnimatedSection>
            <BlockHeading label="Experience" title="Easy-to-Use Interface" />
            <Body>
              <p>
                Much of the strength of DarkerCheats is the user experience. We keep the site and the cheat simple so
                players with no technical background can still get in fast. Choose your plan, buy on Zadeyo, download
                the loader from your order page, and follow the short setup guide — that is it.
              </p>
              <p>
                The in-game menu follows the same idea: clear toggles, readable ESP options, and settings that do not
                require a tutorial to understand. We want you enjoying Dark and Darker, not fighting a complicated UI.
                Simple setup. Simple controls. Stronger extracts.
              </p>
            </Body>
            <ClusterLinks title="Next steps in the Dark And Darker cluster" maxGuides={5} />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
