import { Link } from 'react-router-dom';
import { SAND_CLUSTER } from '../seo/cluster';

type Props = {
  title?: string;
  includeHub?: boolean;
  maxGuides?: number;
};

/** Contextual internal links — descriptive anchors, not “click here” */
export function ClusterLinks({
  title = 'Related Sand Cheats resources',
  includeHub = true,
  maxGuides = 6,
}: Props) {
  const guides = SAND_CLUSTER.guides.slice(0, maxGuides);

  return (
    <aside
      aria-label={title}
      style={{
        marginTop: 'clamp(28px, 4vw, 40px)',
        padding: 'clamp(20px, 3vw, 28px)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-ghost)',
        background: 'rgba(168,85,247,0.04)',
      }}
    >
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: 'var(--text-primary)',
        margin: '0 0 14px',
      }}>
        {title}
      </h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {includeHub && (
          <li>
            <Link
              to={SAND_CLUSTER.hub.to}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--accent-bright)',
                fontWeight: 600,
                textDecoration: 'underline',
                textUnderlineOffset: 3,
              }}
            >
              {SAND_CLUSTER.hub.label}
            </Link>
          </li>
        )}
        {guides.map((g) => (
          <li key={g.to}>
            <Link
              to={g.to}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                textDecoration: 'underline',
                textUnderlineOffset: 3,
              }}
            >
              {g.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
