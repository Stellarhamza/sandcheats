import { useEffect } from 'react';

export const SITE_URL = 'https://darkanddarkercheats.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/dark-and-darker-player-esp-skeleton-wallhack.png`;

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  structuredData?: Record<string, unknown>;
};

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
  type = 'website',
  structuredData,
}: SeoProps) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
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

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl });

    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });

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
  }, [canonicalUrl, description, imageUrl, structuredDataJson, title, type]);

  return null;
}
