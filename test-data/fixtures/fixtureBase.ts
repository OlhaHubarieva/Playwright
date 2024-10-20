import { test as base } from '@playwright/test'
import { HomePage } from '../../page-objects/pages/HomePage';
import { SignInForm } from '../../page-objects/componenets/forms/SignInForm';
import { GaragePage } from "../../page-objects/pages/GaragePage";
import { Page } from '@playwright/test';

type MyFixtures = {
    userGaragePage: GaragePage;
    garagePageWithRemoving: GaragePage;
};

export const test = base.extend<MyFixtures>({
    
    userGaragePage: async ({ page }, use) => {
        await page.context().storageState({ path: 'test-data/states/mainUserState.json' });
        let userGaragePage = new GaragePage(page);
        await userGaragePage.open();
        await use(userGaragePage);
    },
    
    garagePageWithRemoving: async ({ page }, use) => {
        // const context = await browser.newContext({
        //     storageState: 'test-data/states/mainUserState.json'
        // })
        // const page = await context.newPage();
        let garagePage = new GaragePage(page);
        await garagePage.open();
        await use(garagePage);
        await page.locator('.icon-edit').first().click();
        await page.locator('.btn-outline-danger').click();
        await page.locator('.btn-danger').click();
    },
   
    })
