import { chromium } from "@playwright/test";
import { HomePage } from "../../page-objects/pages/HomePage";
import { test } from "../test-data/fixtures/fixtureBase";

test.describe(('GaragePage Fixture'), () => {
    test.use({ storageState: 'test-data/states/mainUserState.json' });
    /*let homePage: HomePage;
    let signInForm: SignInForm;*/

    /*test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signInForm = new SignInForm(page);
    })*/

    test(('Add BMW X5'), async ({ userGaragePage, page }) => {
        page.on('request', request => console.log('>>', request.method(), request.url()));
        page.on('response', response => console.log('<<', response.status(), response.url()));
        await userGaragePage.addNewCar('BMW', 'X5', '100');
        await userGaragePage.verifyLastAddedCarName('BMW X5');
    })

    test(('Add Audi TT'), async ({ userGaragePage }) => {
        await userGaragePage.addNewCar('Audi', 'TT', '100');
        await userGaragePage.verifyLastAddedCarName('Audi TT');
    })

    test(('Add Fiat Ducato'), async ({ userGaragePage }) => {
        await userGaragePage.addNewCar('Fiat', 'Ducato', '100');
        await userGaragePage.verifyLastAddedCarName('Fiat Ducato');
    })

    test(('Add Ford Fiesta'), async ({ userGaragePage }) => {
        await userGaragePage.addNewCar('Ford', 'Fiesta', '100');
        await userGaragePage.verifyLastAddedCarName('Ford Fiesta');
    })

})