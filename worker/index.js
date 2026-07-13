/**
 * Cloudflare Worker — HTTPS + apex 301s, security headers, SPA assets.
 * Canonical: https://sandcheats.net (non-www)
 */
function redirect(toUrl) {
  return new Response(null, {
    status: 301,
    headers: {
      Location: toUrl,
      'Cache-Control': 'public, max-age=3600',
      Vary: 'Host',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

const APEX = 'sandcheats.net';

const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self' https://zadeyo.com",
  "img-src 'self' data: https:",
  "font-src 'self' https://fonts.gstatic.com data:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.googleadservices.com https://www.google.com",
  "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com https://googleads.g.doubleclick.net",
  "media-src 'self' https:",
  'upgrade-insecure-requests',
].join('; ');

const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'X-XSS-Protection': '0',
  'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
  'Content-Security-Policy': CSP,
  'X-DNS-Prefetch-Control': 'on',
};

function withSecurityHeaders(response, requestUrl) {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(key, value);
  }
  const path = requestUrl.pathname.endsWith('/') && requestUrl.pathname !== '/'
    ? requestUrl.pathname.slice(0, -1)
    : requestUrl.pathname;
  const canonical = `https://${APEX}${path === '/' ? '/' : path}${requestUrl.search}`;
  headers.set('Link', `<${canonical}>; rel="canonical"`);
  if (!headers.has('Content-Type') && path.endsWith('.html') === false && path === '/') {
    headers.set('Content-Type', 'text/html; charset=utf-8');
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = (request.headers.get('host') || url.hostname).toLowerCase().split(':')[0];

    const isApex = host === APEX;
    const isWww = host === `www.${APEX}`;
    const needsHttps = url.protocol === 'http:';

    // Force www + http → https apex (real 301 for Server audits)
    if (isWww || needsHttps) {
      const dest = new URL(url.toString());
      dest.protocol = 'https:';
      dest.hostname = APEX;
      dest.port = '';
      return redirect(dest.toString());
    }

    // Unknown hosts on this worker → apex
    if (!isApex && host.endsWith(APEX)) {
      const dest = new URL(url.toString());
      dest.protocol = 'https:';
      dest.hostname = APEX;
      dest.port = '';
      return redirect(dest.toString());
    }

    const assetResponse = await env.ASSETS.fetch(request);
    return withSecurityHeaders(assetResponse, url);
  },
};
