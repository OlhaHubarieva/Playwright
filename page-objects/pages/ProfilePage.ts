import { expect, Locator, Page } from "@playwright/test";

export class ProfilePage {
    readonly page: Page;
    readonly editProfileButton: Locator;
    readonly pageHeading: Locator;
    readonly profileButton: Locator;
    readonly profileName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.editProfileButton = page.getByText('Edit profile');
        this.pageHeading = page.getByRole('heading', { name: 'Profile' });
        this.profileButton = page.locator('[routerlink=profile]');
        this.profileName = page.locator('p.profile_name.display-4');

    }

    async open() {

        await this.profileButton.click();
        await this.page.goto('https://qauto.forstudy.space/panel/profile');

    }

    async verifyPageIsOpen() {

        await expect(this.pageHeading).toBeVisible();

    }

    async verifyProfileName() {

        await expect(this.profileName).toBeVisible();
    }

}


