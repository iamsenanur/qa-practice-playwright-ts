import { test, expect } from '@playwright/test';

// Public endpoints chosen for stability:
// - Users list: JSONPlaceholder (200 + array)
// - Create user: JSONPlaceholder (201 + id)
// - Not found case: httpbin 404

const USERS = 'https://jsonplaceholder.typicode.com/users';
const CREATE = 'https://jsonplaceholder.typicode.com/users';
const NOT_FOUND_404 = 'https://httpbin.org/status/404';

test.describe('Public APIs (stable)', () => {
  test('GET users returns 200 and data list', async ({ request }) => {
    const res = await request.get(USERS);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
  });

  test('POST create user returns 201 and id', async ({ request }) => {
    const payload = { name: 'senanur', job: 'qa-engineer' };
    const res = await request.post(CREATE, { data: payload });
    expect(res.status()).toBe(201);
    const body = await res.json();
    // JSONPlaceholder returns an object incl. id for created resources
    expect(body).toHaveProperty('id');
  });

  test('GET not found returns 404', async ({ request }) => {
    const res = await request.get(NOT_FOUND_404);
    expect(res.status()).toBe(404);
  });
});
