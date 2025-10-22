import { test, expect } from '@playwright/test';

test.describe('@ui SauceDemo - Login & Inventory', () => {
  test('negative login - wrong password shows error', async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('wrong_password');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');
  });

  test('positive login - inventory visible and add to cart', async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory/);
    const count = await page.locator('.inventory_item').count();
    expect(count).toBeGreaterThan(0);

    const firstAdd = page.getByRole('button', { name: /Add to cart/i }).first();
    await firstAdd.click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });
});
