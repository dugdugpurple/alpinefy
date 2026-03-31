const COUNTER_URL = 'https://api.countapi.xyz';
const NAMESPACE = 'alpinefy.com';
const KEY = 'career_job_posting_visits';

export default async (request) => {
  const url = new URL(request.url);
  const action = url.searchParams.get('action') === 'hit' ? 'hit' : 'get';
  const endpoint = `${COUNTER_URL}/${action}/${NAMESPACE}/${KEY}`;

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: { Accept: 'application/json' },
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

    const payload = await response.json();
    const value = Number.parseInt(String(payload?.value ?? ''), 10);
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
