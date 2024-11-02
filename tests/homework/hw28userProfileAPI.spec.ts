import test, { chromium } from "@playwright/test";
import { HomePage } from "../../page-objects/pages/HomePage";
import { SignInForm } from "../../page-objects/componenets/forms/SignInForm";
import { mainUserEmail, mainUserPassword } from "../../test-data/credentials";
import { ProfilePage } from "../../page-objects/pages/ProfilePage";

test.describe(('Network test'), () => {
    let homePage: HomePage;
    let signInForm: SignInForm;
    let profilePage: ProfilePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signInForm = new SignInForm(page);
        profilePage = new ProfilePage(page);

        const testData = {
            "status": "ok",
            "data": [
                {
                    "userId": 152723,
                    "photoFilename": "default-user.png",
                    "name": "Beauty",
                    "lastName": "Unicorn"
                },
            ]
        }

        await page.route('**/api/users/profile', route => route.fulfill({
            body: JSON.stringify(testData),
        }));

        await homePage.open();
        await homePage.openSignInForm();
        await signInForm.loginWithCredentials(mainUserEmail, mainUserPassword);
        await profilePage.open();

    })

    test(('page.route user profile'), async ({ page }) => {

        await profilePage.verifyPageIsOpen();
        await profilePage.verifyProfileName();

    })
})