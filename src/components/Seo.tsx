import { useEffect } from 'react';

export const SITE_URL = 'https://sandcheats.net';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/sand-cheats-social-preview.jpg`;

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  structuredData?: Record<string, unknown>;
};

const OG_IMAGE_WIDTH = '1280';
const OG_IMAGE_HEIGHT = '720';

function absoluteUrl(pathOrUrl: string) {
  return new URL(pathOrUrl, SITE_URL).toString();
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

export function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  type = 'website',
  structuredData,
}: SeoProps) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const alt = imageAlt ?? title;
  const structuredDataJson = structuredData ? JSON.stringify(structuredData) : '';

  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });
    upsertMeta('meta[name="googlebot"]', { name: 'googlebot', content: 'index, follow' });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });
    upsertLink('link[rel="image_src"]', { rel: 'image_src', href: imageUrl });

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Sand Cheats' });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_US' });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    upsertMeta('meta[property="og:image:secure_url"]', { property: 'og:image:secure_url', content: imageUrl });
    upsertMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: OG_IMAGE_WIDTH });
    upsertMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: OG_IMAGE_HEIGHT });
    upsertMeta('meta[property="og:image:type"]', { property: 'og:image:type', content: 'image/jpeg' });
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: alt });

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });
    upsertMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: alt });

    const existingJsonLd = document.head.querySelector<HTMLScriptElement>('script[data-route-json-ld="true"]');

    if (!structuredDataJson) {
      existingJsonLd?.remove();
      return;
    }

    const jsonLd = existingJsonLd ?? document.createElement('script');
    jsonLd.type = 'application/ld+json';
    jsonLd.dataset.routeJsonLd = 'true';
    jsonLd.textContent = structuredDataJson;

    if (!existingJsonLd) {
      document.head.appendChild(jsonLd);
    }
  }, [alt, canonicalUrl, description, imageUrl, structuredDataJson, title, type]);

  return null;
}
