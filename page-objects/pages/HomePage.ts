import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly signUpButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signUpButton = page.locator('.hero-descriptor_btn');
    }

async open (){
    await this.page.goto('');
}

    async openRegistrationForm(){
    await this.signUpButton.click();
}
}