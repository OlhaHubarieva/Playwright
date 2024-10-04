import { test, expect } from '@playwright/test';

test.describe('Locators', () => {

  test('GetByRole', async ({ page }) => {
    await page.goto('');
    await expect(page.getByRole('heading', { level: 1, name: 'Do more!' })).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();

  })

  test('GetByText', async ({ page }) => {
    await page.goto('');
    await expect(page.getByText('Do more!', { exact: true })).toBeVisible();
  })

  test('GetByLabel', async ({ page }) => {
    await page.goto('');
    await page.getByText('Sign In').click();
    await expect(page.getByLabel('Email')).toBeVisible();

  })

  test('hasText', async ({ page }) => {
    await page.goto('');
    await page.locator('button', { hasText: 'Sign up' }).click();

  })

  test('has', async ({ page }) => {
    await page.goto('');
    const fbIcon = page.locator('.icon-facebook');
    await page.locator('//a', { has: fbIcon }).click();

  })

  test('multiple elements', async ({ page }) => {
    await page.goto('');
    console.log('Number of elements'+ await page.locator('.socials_icon').count());

  })

  test('Dropdowns', async ({ page }) => {
    await page.goto('');
    await page.getByText('Sign In').click();
    await page.locator('#signinEmail').fill('hubba.oljuna+t22@gmail.com');
    await page.locator('#signinPassword').fill('OHubba15');
    await page.locator('//*[@class="modal-content"]//button[@class="btn btn-primary"]').click();
    await page.locator('//button[@class="btn btn-primary"]').click();
    await page.waitForTimeout(200);
    await page.locator('#addCarBrand').selectOption('Ford');
  })

  test('screenshot', async ({ page }) => {
    await page.goto('');
    await expect(page.locator('.footer')).toHaveScreenshot(footer.png);

  })
})