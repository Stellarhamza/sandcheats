const items = [
  { label: 'Windows 10', icon: '⊞' },
  { label: 'Windows 11', icon: '⊞' },
  { label: 'Steam', icon: '◈' },
  { label: 'Easy Anti-Cheat', icon: '◉' },
  { label: 'External Cheat', icon: '◎' },
  { label: 'HWID Spoofer', icon: '◈' },
  { label: '24/7 Support', icon: '◎' },
  { label: 'Instant Access', icon: '◉' },
  { label: 'Video Guide', icon: '▶' },
  { label: 'Discord Community', icon: '◈' },
  { label: 'Auto Updates', icon: '↺' },
  { label: 'Web order delivery', icon: '◎' },
];

function TickerRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: 'hidden', width: '100%', marginBottom: '10px' }}>
      <div style={{
        display: 'flex',
        gap: '10px',
        width: 'max-content',
        animation: `${reverse ? 'ticker-reverse' : 'ticker'} 32s linear infinite`,
      }}>
        {doubled.map((item, i) => (
          <div key={`${item.label}-${i}`} className="glass-card" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '9px 20px',
            borderRadius: '999px',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}>
            <span style={{
              fontSize: '0.75rem',
              color: 'var(--accent)',
              lineHeight: 1,
            }}>{item.icon}</span>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              letterSpacing: '0.02em',
            }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Integrations() {
  return (
    <section style={{ background: 'var(--bg-void)', padding: 'clamp(64px, 8vw, 100px) 0', overflow: 'hidden' }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: `0 max(16px, env(safe-area-inset-right), 4vw) 0 max(16px, env(safe-area-inset-left), 4vw)`,
        marginBottom: '44px',
      }}
      >
        <div style={{ textAlign: 'center' }}>
          <p className="section-label" style={{ justifyContent: 'center', marginBottom: '18px' }}>System Compatibility</p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            textTransform: 'uppercase',
            lineHeight: 1.05,
          }}>
            Built for your setup.
          </h2>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px',
          background: 'linear-gradient(to right, var(--bg-void), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} aria-hidden="true" />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px',
          background: 'linear-gradient(to left, var(--bg-void), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} aria-hidden="true" />

        <TickerRow />
        <TickerRow reverse />
      </div>
    </section>
  );
}
