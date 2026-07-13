/**
 * Cloudflare Worker — force HTTPS + apex host, then serve Vite SPA assets.
 */
function redirect(toUrl) {
  return new Response(null, {
    status: 301,
    headers: {
      Location: toUrl,
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      return redirect(url.toString());
    }

    if (url.hostname === 'www.sandcheats.net') {
      url.hostname = 'sandcheats.net';
      return redirect(url.toString());
    }

    return env.ASSETS.fetch(request);
  },
};
