import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').fill('olya');
  await page.locator('#signupLastName').click();
  await page.locator('#signupLastName').fill('hub');
  await page.getByLabel('Name').fill('dffgg');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByText('Email is incorrect').click();
});