import type { CSSProperties } from 'react';

/** Canonical SEO image paths — WebP for page speed, PNG kept for OG crawlers */

export const MEDIA = {
  playerEsp: {
    src: '/dark-and-darker-player-esp-skeleton-wallhack.webp',
    fallback: '/dark-and-darker-player-esp-skeleton-wallhack.png',
    alt: 'Dark and Darker player ESP wallhack showing skeleton overlays, bounding boxes, health bars, and distance markers in a dungeon',
  },
  lootEsp: {
    src: '/dark-and-darker-loot-esp-chest-wallhack.webp',
    fallback: '/dark-and-darker-loot-esp-chest-wallhack.png',
    alt: 'Dark and Darker loot ESP wallhack revealing chests, gear, and mobs through dungeon walls with distance labels',
  },
  mobEsp: {
    src: '/dark-and-darker-esp-mob-trap-wallhack.webp',
    fallback: '/dark-and-darker-esp-mob-trap-wallhack.png',
    alt: 'Dark and Darker ESP cheat highlighting Skeleton Footman, traps, ore, and dungeon enemies through walls',
  },
  heroLcp: {
    src: '/hero-dark-and-darker-esp-lcp.webp',
    fallback: '/dark-and-darker-player-esp-skeleton-wallhack.png',
    alt: 'Dark and Darker player ESP wallhack showing skeleton overlays, bounding boxes, health bars, and distance markers in a dungeon',
  },
  socialPreview: {
    src: '/dark-and-darker-cheats-social-preview.png',
    fallback: '/dark-and-darker-cheats-social-preview.png',
    alt: 'Dark and Darker Cheats — ESP and wallhack social preview',
  },
  ogGoogle: {
    src: '/og-google-preview.png',
    fallback: '/og-google-preview.png',
    alt: 'Dark and Darker Cheats ESP wallhack preview for search and social sharing',
  },
} as const;

export const SHOWCASE_IMAGES = [MEDIA.playerEsp, MEDIA.lootEsp, MEDIA.mobEsp] as const;

export const BLOG_IMAGES = {
  esp: '/blog-dark-and-darker-esp-guide.jpg',
  loot: '/blog-dark-and-darker-loot-esp.jpg',
  player: '/blog-dark-and-darker-player-esp.jpg',
  guide: '/blog-dark-and-darker-guide.jpg',
  comparison: '/blog-dark-and-darker-cheats-comparison.jpg',
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
