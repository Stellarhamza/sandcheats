import { useRef, useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

const DEMO_VIDEOS = [
  {
    src: 'https://bryjchknhsrmjdunnfer.supabase.co/storage/v1/object/public/575/sandraiders.mp4',
    label: 'Play Sand Cheats demo video 1',
  },
  {
    src: 'https://media.kernaim.to/products/sand-raiders-of-sophie/gif-1783608549085.mp4',
    label: 'Play Sand Cheats demo video 2',
  },
] as const;

function ClickToPlayVideo({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlayClick() {
    const video = videoRef.current;
    if (!video) return;
    void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }

  return (
    <div style={{
      flex: '1 1 0',
      minHeight: 160,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 1,
      border: '1px solid var(--border-ghost)',
      background: '#000',
      aspectRatio: '16 / 9',
    }}>
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        playsInline
        controls={playing}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          background: '#000',
        }}
      >
        Your browser does not support the video tag.
      </video>

      {!playing && (
        <button
          type="button"
          onClick={handlePlayClick}
          aria-label={label}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(6,4,9,0.45)',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <span style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #c084fc 0%, #7c3aed 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(124,58,237,0.45)',
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

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
                <span className="gradient-text">Sand Cheats?</span>
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
                  When you choose Sand Cheats, you&apos;re choosing quality, reliability, and
                  serious support. We have backed this Legit-only ESP product with wipe-to-wipe updates
                  and no Rage features.
                </p>
                <p>
                  Discord support stays online for setup and wipe questions. We ship loader updates after patches
                  as quickly as we can — often the same day a wipe lands. No provider can promise zero bans; we focus on
                  external Legit ESP and staying current.
                </p>
                <p>
                  Checkout and delivery stay fast: buy Sand Cheats, get instant access to your
                  loader and setup guide, then dial in enemy ESP, loot overlays, and colors.
                  Right now is as good a time as ever to start.
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

              {DEMO_VIDEOS.map((video) => (
                <ClickToPlayVideo key={video.src} src={video.src} label={video.label} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
