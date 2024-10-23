import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly signUpButton: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signUpButton = page.locator('.hero-descriptor_btn');
        this.signInButton = page.locator('.header_signin');
    }

    async open() {
        await this.page.goto('');
    }

    async openRegistrationForm() {
        await this.signUpButton.click();

    }

    async openSignInForm() {
        await this.signInButton.click();
    }
}