import { test, expect } from '@playwright/test';
import { HomePage } from '../../page-objects/pages/HomePage';
import { randomUserEmail } from '../../test-data/credentials';
import { RegistrationForm } from '../../page-objects/componenets/forms/RegistrationForm';


test.describe('Registration Form UI', () => {

  let homePage: HomePage;
  let registrationForm: RegistrationForm;

  test.beforeEach(async ({ page }) => {

    homePage = new HomePage(page);
    registrationForm = new RegistrationForm(page);
    await homePage.open();
    await homePage.openRegistrationForm();

  })

  test('Verify Registration For UI acc to design', async ({ page }) => {

    await expect(page.locator('#signupName')).toBeVisible();
    await expect(page.getByText('Registration', { exact: true })).toBeVisible();
    await expect(page.locator('#signupName')).toBeVisible();
    await expect(page.locator('#signupName')).toBeEmpty();
    await expect(page.locator('#signupLastName')).toBeVisible();
    await expect(page.locator('#signupLastName')).toBeEmpty();
    await expect(page.locator('#signupEmail')).toBeVisible();
    await expect(page.locator('#signupEmail')).toBeEmpty();
    await expect(page.locator('#signupPassword')).toBeVisible();
    await expect(page.locator('#signupPassword')).toBeEmpty();
    await expect(page.locator('#signupRepeatPassword')).toBeVisible();
    await expect(page.locator('#signupRepeatPassword')).toBeEmpty();
    await expect(page.locator('.modal-footer>[type=button]')).toBeVisible();
    await expect(page.locator('.modal-footer>[type=button]')).toContainText('Register');
    await registrationForm.verifyRegisterButtonDisabled();

  })

  test('Verify User can be registered', async ({ page }) => {

    await registrationForm.verifyUserRegistration('Jerry', 'Hill', randomUserEmail, 'Qwerty22');
    await page.locator('[routerlink=profile]').click();
    await page.waitForTimeout(1000);
    await expect(page.locator('//p[@class="profile_name display-4"]')).toContainText('Jerry Hill');

  })

})

test.describe('Name field verification', () => {

  let homePage: HomePage;
  let registrationForm: RegistrationForm;

  test.beforeEach(async ({ page }) => {

    homePage = new HomePage(page);
    registrationForm = new RegistrationForm(page);
    await homePage.open();
    await homePage.openRegistrationForm();

  })

  test('Verify Name is required error message is shown', async () => {

    await registrationForm.enterValueAndTriggerErrorOnField('', 'name');
    await registrationForm.verifyErrorMessageByText('Name required');
    await registrationForm.verifyRegisterButtonDisabled();

  })

  test('Verify Name is invalid error message is shown', async () => {
    await registrationForm.enterValueAndTriggerErrorOnField('aqa2', 'name');
    await registrationForm.verifyErrorMessageByText('Name is invalid');
    await registrationForm.verifyRegisterButtonDisabled();

  })

  test('Verify Name length validation (min 2 char) error message is shown', async () => {

    await registrationForm.enterValueAndTriggerErrorOnField('h', 'name');
    await registrationForm.verifyErrorMessageByText('Name has to be from 2 to 20 characters long');
    await registrationForm.verifyRegisterButtonDisabled();

  })

  test('Verify Name length validation (max 20 char) error message is shown', async () => {

    await registrationForm.enterValueAndTriggerErrorOnField('Olhanclepfmrjhebvlena', 'name');
    await registrationForm.verifyErrorMessageByText('Name has to be from 2 to 20 characters long');
    await registrationForm.verifyRegisterButtonDisabled();

  })

})

test.describe('Last Name field verification', () => {

  let homePage: HomePage;
  let registrationForm: RegistrationForm;

  test.beforeEach(async ({ page }) => {

    homePage = new HomePage(page);
    registrationForm = new RegistrationForm(page);
    await homePage.open();
    await homePage.openRegistrationForm();

  })


  test('Verify Last Name is required error message is shown', async () => {

    await registrationForm.enterValueAndTriggerErrorOnField('', 'lastName');
    await registrationForm.verifyErrorMessageByText('Last name required');
    await registrationForm.verifyRegisterButtonDisabled();

  })

  test('Verify Last Name is invalid error message is shown', async () => {

    await registrationForm.enterValueAndTriggerErrorOnField('def5', 'lastName');
    await registrationForm.verifyErrorMessageByText('Last name is invalid');
    await registrationForm.verifyRegisterButtonDisabled();

  })

  test('Verify Last name length validation (min 2 char) error message is shown', async () => {

    await registrationForm.enterValueAndTriggerErrorOnField('g', 'lastName');
    await registrationForm.verifyErrorMessageByText('Last name has to be from 2 to 20 characters long');
    await registrationForm.verifyRegisterButtonDisabled();

  })

  test('Verify Last name length validation (max 20 char) error message is shown', async () => {

    await registrationForm.enterValueAndTriggerErrorOnField('xnlpoidfgrnkytrsblres', 'lastName');
    await registrationForm.verifyErrorMessageByText('Last name has to be from 2 to 20 characters long');
    await registrationForm.verifyRegisterButtonDisabled();

  })

})

test.describe('Email field verification', () => {

  let homePage: HomePage;
  let registrationForm: RegistrationForm;

  test.beforeEach(async ({ page }) => {

    homePage = new HomePage(page);
    registrationForm = new RegistrationForm(page);
    await homePage.open();
    await homePage.openRegistrationForm();

  })

  test('Verify Email is required error message is shown', async () => {

    await registrationForm.enterValueAndTriggerErrorOnField('', 'email');
    await registrationForm.verifyErrorMessageByText('Email required');
    await registrationForm.verifyRegisterButtonDisabled();

  })

  test('Verify Email is incorrect error message is shown', async () => {

    await registrationForm.enterValueAndTriggerErrorOnField('glog@ee', 'email');
    await registrationForm.verifyErrorMessageByText('Email is incorrect');
    await registrationForm.verifyRegisterButtonDisabled();

  })

})

test.describe('Password field verification', () => {
  let homePage: HomePage;
  let registrationForm: RegistrationForm;

  test.beforeEach(async ({ page }) => {

    homePage = new HomePage(page);
    registrationForm = new RegistrationForm(page);
    await homePage.open();
    await homePage.openRegistrationForm();

  })

  test('Verify Password is required error message is shown', async () => {

    await registrationForm.enterValueAndTriggerErrorOnField('', 'password');
    await registrationForm.verifyErrorMessageByText('Password required');
    await registrationForm.verifyRegisterButtonDisabled();

  })

  test('Verify Wrong Password (min 8 char) error message is shown', async () => {

    await registrationForm.enterValueAndTriggerErrorOnField('Qwertu1', 'password');
    await registrationForm.verifyErrorMessageByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    await registrationForm.verifyRegisterButtonDisabled();

  })

  test('Verify Wrong Password ((max 15 char) error message is shown', async () => {

    await registrationForm.enterValueAndTriggerErrorOnField('Qwertu1enc4gNlap', 'password');
    await registrationForm.verifyErrorMessageByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    await registrationForm.verifyRegisterButtonDisabled();

  })

  test('Verify Wrong Password ((min 1 int) error message is shown', async () => {

    await registrationForm.enterValueAndTriggerErrorOnField('Qwadrocmp', 'password');
    await registrationForm.verifyErrorMessageByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    await registrationForm.verifyRegisterButtonDisabled();

  })

  test('Verify Wrong Password ((min 1 Cap letter) error message is shown', async () => {

    await registrationForm.enterValueAndTriggerErrorOnField('kamr1v5g9', 'password');
    await registrationForm.verifyErrorMessageByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    await registrationForm.verifyRegisterButtonDisabled();

  })

  test('Verify Wrong Password ((min 1 Small letter) error message is shown', async () => {

    await registrationForm.enterValueAndTriggerErrorOnField('NUL83PO7C9', 'password');
    await registrationForm.verifyErrorMessageByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    await registrationForm.verifyRegisterButtonDisabled();

  })

})

test.describe('Re-enter password field verification', () => {

  let homePage: HomePage;
  let registrationForm: RegistrationForm;

  test.beforeEach(async ({ page }) => {

    homePage = new HomePage(page);
    registrationForm = new RegistrationForm(page);
    await homePage.open();
    await homePage.openRegistrationForm();

  })

  test('Verify Re-enter password required error message is shown', async () => {

    await registrationForm.enterValueAndTriggerErrorOnField('', 're-password');
    await registrationForm.verifyErrorMessageByText('Re-enter password required');
    await registrationForm.verifyRegisterButtonDisabled();

  })

  test('Verify Passwords do not match error message is shown', async ({ page }) => {

    await page.locator('#signupPassword').fill('Testing12Cool');
    await page.locator('#signupPassword').click();
    await registrationForm.enterValueAndTriggerErrorOnField('Testing15Cool', 're-password');
    await registrationForm.verifyErrorMessageByText('Passwords do not match');
    await registrationForm.verifyRegisterButtonDisabled();

  })

})

