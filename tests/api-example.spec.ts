import { test, expect } from '@playwright/test';

test.describe('@api HttpBin stable API', () => {
  test('GET json returns 200 and object', async ({ request }) => {
    const res = await request.get('https://httpbin.org/json');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(typeof body).toBe('object');
  });

  test('POST echoes payload (200)', async ({ request }) => {
    const payload = { name: 'senanur', job: 'qa-engineer' };
    const res = await request.post('https://httpbin.org/post', { data: payload });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.json).toBeTruthy();
    expect(body.json.name).toBe(payload.name);
    expect(body.json.job).toBe(payload.job);
  });

  test('404 endpoint returns 404', async ({ request }) => {
    const res = await request.get('https://httpbin.org/status/404');
    expect(res.status()).toBe(404);
  });
});
