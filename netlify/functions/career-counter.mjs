const HITS_URL = 'https://hits.sh/alpinefy.com/kariera.svg?label=hits';

export default async (request) => {
  try {
    const response = await fetch(HITS_URL, {
      method: 'GET',
      headers: { Accept: 'image/svg+xml,text/plain;q=0.9,*/*;q=0.8' },
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: 'Counter upstream failed', status: response.status }),
        {
          status: 502,
          headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
        }
      );
    }

    const svg = await response.text();
    const match = svg.match(/aria-label="[^"]*:\s*([0-9,]+)"/i) ?? svg.match(/>([0-9,]+)<\/text>/i);
    const value = Number.parseInt((match?.[1] ?? '').replaceAll(',', ''), 10);
    if (!Number.isFinite(value) || value < 0) {
      return new Response(JSON.stringify({ error: 'Invalid counter value' }), {
        status: 502,
        headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
      });
    }

    return new Response(JSON.stringify({ value }), {
      status: 200,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Counter unreachable' }), {
      status: 502,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
    });
  }
};
