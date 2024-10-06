import { expect, Locator, Page } from "@playwright/test";

export class RegistrationForm {
    readonly page: Page;
    readonly form: Locator;
    readonly nameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly reEnterPasswordField: Locator;
    readonly registerButton: Locator;


    constructor(page: Page) {
        this.form = page.locator('.modal-content app-signup-modal');
        this.nameField = this.form.locator('#signupName');
        this.lastNameField = page.locator('#signupLastName');
        this.emailField = page.locator('#signupEmail');
        this.passwordField = page.locator('#signupPassword');
        this.reEnterPasswordField = page.locator('#signupRepeatPassword');
        this.registerButton = page.locator('.modal-footer>[type=button]');

    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }


    async verifyUserRegistration(name: string, lastName: string, email: string, password: string) {
        await this.nameField.fill(name);
        await this.lastNameField.fill(lastName);
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.reEnterPasswordField.fill(password);
        await this.clickRegisterButton();
    }

    async enterValueAndTriggerErrorOnField(value: string, element: string) {
        let elementForAction: Locator;
        if (element === 'name') {
            elementForAction = this.nameField;
        } else if (element === 'lastName') {
            elementForAction = this.lastNameField;
        } else if (element === 'email') {
            elementForAction = this.emailField;
        } else if (element === 'password') {
            elementForAction = this.passwordField;
        } else {
            elementForAction = this.reEnterPasswordField;
        }
        await elementForAction.fill(value);
        await elementForAction.blur();
        await expect(elementForAction).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    }

    async verifyErrorMessageByText(text: string) {
        await expect(this.form.getByText(text)).toBeVisible();
    }

    async verifyRegisterButtonDisabled(){
        await expect(this.registerButton).toBeDisabled;
    }
}