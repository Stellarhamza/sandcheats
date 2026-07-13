import type { CSSProperties } from 'react';

/** Canonical SEO image paths — WebP for page speed, PNG kept for OG crawlers */

export const MEDIA = {
  playerEsp: {
    src: '/sand-cheats-player-esp.webp',
    fallback: '/sand-cheats-player-esp-og.jpg',
    alt: 'Sand Cheats — SAND Raiders of Sophie desert island approach screenshot used with player ESP and wallhack coverage',
  },
  lootEsp: {
    src: '/sand-cheats-loot-esp.webp',
    fallback: '/sand-cheats-loot-esp-og.jpg',
    alt: 'Sand Cheats — night raid on Sophie island screenshot for loot ESP and through-wall loot awareness',
  },
  mobEsp: {
    src: '/sand-cheats-trampler-showcase.webp',
    fallback: '/sand-cheats-trampler-showcase-og.jpg',
    alt: 'Sand Cheats — Trampler desert combat screenshot highlighting ESP visuals for walkers, NPCs, and rivals',
  },
  heroLcp: {
    src: '/hero-sand-cheats-player-esp-lcp.webp',
    fallback: '/sand-cheats-hero-og.jpg',
    alt: 'Sand Cheats — dune rumble screenshot for SAND Raiders of Sophie ESP and wallhack cheats',
  },
  socialPreview: {
    src: '/sand-cheats-social-preview.jpg',
    fallback: '/sand-cheats-social-preview.jpg',
    alt: 'Sand Cheats — ESP and wallhack social preview',
  },
  ogGoogle: {
    src: '/og-google-preview.jpg',
    fallback: '/og-google-preview.jpg',
    alt: 'Sand Cheats ESP wallhack preview for search and social sharing',
  },
} as const;

export const SHOWCASE_IMAGES = [MEDIA.playerEsp, MEDIA.lootEsp, MEDIA.mobEsp] as const;

export const BLOG_IMAGES = {
  esp: '/blog-sand-esp-guide.jpg',
  loot: '/blog-sand-loot-esp.jpg',
  player: '/blog-sand-player-esp.jpg',
  guide: '/blog-sand-guide.jpg',
  comparison: '/blog-sand-cheats-comparison.jpg',
} as const;

type SeoImageProps = {
  src: string;
  alt: string;
  fallback?: string;
  style?: CSSProperties;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  width?: number;
  height?: number;
  sizes?: string;
};

export function SeoImage({
  src,
  alt,
  fallback,
  style,
  className,
  loading = 'lazy',
  fetchPriority,
  width = 1280,
  height = 720,
  sizes = '(max-width: 768px) 100vw, 1280px',
}: SeoImageProps) {
  const shared = {
    alt,
    title: alt,
    width,
    height,
    sizes,
    loading,
    decoding: (loading === 'eager' ? 'sync' : 'async') as 'sync' | 'async',
    className,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      display: 'block' as const,
      ...style,
    },
    ...(fetchPriority ? { fetchPriority } : {}),
  };

  if (src.endsWith('.webp')) {
    return (
      <picture style={{ display: 'contents' }}>
        <source srcSet={src} type="image/webp" sizes={sizes} />
        <img src={fallback ?? src.replace(/\.webp$/, '.png')} {...shared} />
      </picture>
    );
  }

  return <img src={src} {...shared} />;
}
