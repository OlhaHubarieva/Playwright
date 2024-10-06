import { test, expect } from '@playwright/test';

test.describe('Registration Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.locator('.hero-descriptor_btn').click();
  })

  test('Verify Registration For UI acc to design', async ({ page }) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.locator('.hero-descriptor_btn').click();
    await expect(page.locator('.modal-content app-signup-modal')).toBeVisible();
    await expect(page.getByText('Registration', { exact: true })).toBeVisible();
    await expect(page.locator('#signupName')).toBeVisible();
    await expect(page.locator('#signupName')).toContainText('');
    await expect(page.locator('#signupLastName')).toBeVisible();
    await expect(page.locator('#signupLastName')).toContainText('');
    await expect(page.locator('#signupEmail')).toBeVisible();
    await expect(page.locator('#signupEmail')).toContainText('');
    await expect(page.locator('#signupPassword')).toBeVisible();
    await expect(page.locator('#signupPassword')).toContainText('');
    await expect(page.locator('#signupRepeatPassword')).toBeVisible();
    await expect(page.locator('#signupRepeatPassword')).toContainText('');
    await expect(page.locator('.modal-footer>[type=button]')).toBeVisible();
    await expect(page.locator('.modal-footer>[type=button]')).toContainText('Register');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

  test('Verify User can be registered', async ({ page }) => {
    await page.locator('#signupName').fill("Jerry");
    await page.locator('#signupLastName').fill('Hill');
    await page.locator('#signupEmail').fill('hubba.oljuna+aqa14@gmail.com');
    await page.locator('#signupPassword').fill('OHubba15');
    await page.locator('#signupRepeatPassword').fill('OHubba15');
    await page.locator('.modal-footer>[type=button]').click();
    await page.locator('[routerlink=profile]').click();
    await page.waitForTimeout(1000);
    await expect(page.locator('//p[@class="profile_name display-4"]')).toContainText('Jerry Hill');
  })

})

test.describe('Name field verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.locator('.hero-descriptor_btn').click();
  })

  test('Verify Name is required error message is shown', async ({ page }) => {
    await page.locator('#signupName').focus();
    await page.locator('#signupName').blur();
    await expect(page.locator('#signupName')).toContainText('');
    await expect(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Name required');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

  test('Verify Name is invalid error message is shown', async ({ page }) => {
    await page.locator('#signupName').fill('aqa2');
    await page.locator('#signupName').blur();
    await expect(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Name is invalid');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

  test('Verify Name length validation (min 2 char) error message is shown', async ({ page }) => {
    await page.locator('#signupName').fill('h');
    await page.locator('#signupName').blur();
    await expect(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Name has to be from 2 to 20 characters long');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

  test('Verify Name length validation (max 20 char) error message is shown', async ({ page }) => {
    await page.locator('#signupName').fill('Olhanclepfmrjhebvlena');
    await page.locator('#signupName').blur();
    await expect(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Name has to be from 2 to 20 characters long');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

})

test.describe('Last Name field verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.locator('.hero-descriptor_btn').click();
  })


  test('Verify Last Name is required error message is shown', async ({ page }) => {
    await page.locator('#signupLastName').focus();
    await page.locator('#signupLastName').blur();
    await expect(page.locator('#signupLastName')).toContainText('');
    await expect(page.locator('#signupLastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Last name required');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

  test('Verify Last Name is invalid error message is shown', async ({ page }) => {
    await page.locator('#signupLastName').fill('def5');
    await page.locator('#signupLastName').blur();
    await expect(page.locator('#signupLastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Last name is invalid');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

  test('Verify Last name length validation (min 2 char) error message is shown', async ({ page }) => {
    await page.locator('#signupLastName').fill('k');
    await page.locator('#signupLastName').blur();
    await expect(page.locator('#signupLastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Last name has to be from 2 to 20 characters long');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

  test('Verify Last name length validation (max 20 char) error message is shown', async ({ page }) => {
    await page.locator('#signupLastName').fill('xnlpoidfgrnkytrsblres');
    await page.locator('#signupLastName').blur();
    await expect(page.locator('#signupLastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Last name has to be from 2 to 20 characters long');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

})

test.describe('Email field verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.locator('.hero-descriptor_btn').click();
  })

  test('Verify Email is required error message is shown', async ({ page }) => {
    await page.locator('#signupEmail').focus();
    await page.locator('#signupEmail').blur();
    await expect(page.locator('#signupEmail')).toContainText('');
    await expect(page.locator('#signupEmail')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Email required');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

  test('Verify Email is incorrect error message is shown', async ({ page }) => {
    await page.locator('#signupEmail').fill('glog@ee');
    await page.locator('#signupEmail').blur();
    await expect(page.locator('#signupEmail')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Email is incorrect');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

})

test.describe('Password field verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.locator('.hero-descriptor_btn').click();
  })

  test('Verify Password is required error message is shown', async ({ page }) => {
    await page.locator('#signupPassword').focus();
    await page.locator('#signupPassword').blur();
    await expect(page.locator('#signupPassword')).toContainText('');
    await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Password required');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

  test('Verify Wrong Password (min 8 char) error message is shown', async ({ page }) => {
    await page.locator('#signupPassword').fill('Qwertu1');
    await page.locator('#signupPassword').blur();
    await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

  test('Verify Wrong Password ((max 15 char) error message is shown', async ({ page }) => {
    await page.locator('#signupPassword').fill('Qwertu1enc4gNlap');
    await page.locator('#signupPassword').blur();
    await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

  test('Verify Wrong Password ((min 1 int) error message is shown', async ({ page }) => {
    await page.locator('#signupPassword').fill('Qwadrocmp');
    await page.locator('#signupPassword').blur();
    await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

  test('Verify Wrong Password ((min 1 Cap letter) error message is shown', async ({ page }) => {
    await page.locator('#signupPassword').fill('kamr1v5g9');
    await page.locator('#signupPassword').blur();
    await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

  test('Verify Wrong Password ((min 1 Small letter) error message is shown', async ({ page }) => {
    await page.locator('#signupPassword').fill('NUL83PO7C9');
    await page.locator('#signupPassword').blur();
    await expect(page.locator('#signupPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

})

test.describe('Re-enter password field verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await page.locator('.hero-descriptor_btn').click();
  })

  test('Verify Re-enter password required error message is shown', async ({ page }) => {

    await page.locator('#signupPassword').fill('Parabola25');
    await page.locator('#signupPassword').click();
    await page.locator('#signupRepeatPassword').focus();
    await page.locator('#signupRepeatPassword').blur();
    await expect(page.locator('#signupRepeatPassword')).toContainText('');
    await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Re-enter password required');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

  test('Verify Passwords do not match error message is shown', async ({ page }) => {

    await page.locator('#signupPassword').fill('Testing12Cool');
    await page.locator('#signupPassword').click();
    await page.locator('#signupRepeatPassword').fill('Testing15Cool');
    await page.locator('#signupRepeatPassword').blur();
    await expect(page.locator('#signupRepeatPassword')).toContainText('');
    await expect(page.locator('#signupRepeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(page.locator('.invalid-feedback>p')).toContainText('Passwords do not match');
    await expect(page.locator('.modal-footer>[type=button]')).toBeDisabled;
  })

});


