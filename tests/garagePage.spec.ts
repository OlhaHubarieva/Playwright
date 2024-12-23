import test, { chromium } from "@playwright/test";
import { HomePage } from "../page-objects/pages/HomePage";
import { SignInForm } from "../page-objects/componenets/forms/SignInForm";
import { GaragePage } from "../page-objects/pages/GaragePage";

test.describe(('GaragePage with POM'), () => {
    test.use({ storageState: 'test-data/states/mainUserState.json'});
    let homePage: HomePage;
    let signInForm: SignInForm;
    let garagePage: GaragePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signInForm = new SignInForm(page);
        garagePage = new GaragePage(page);
        await garagePage.open();

    })

    test(('Add BMW X5'), async () => {
        await garagePage.addNewCar('BMW', 'X5', '100');
        await garagePage.verifyLastAddedCarName('BMW X5');
    })

    test(('Add Audi TT'), async () => {
        await garagePage.addNewCar('Audi', 'TT', '100');
        await garagePage.verifyLastAddedCarName('Audi TT');
    })

    test(('Add Fiat Ducato'), async () => {
        await garagePage.addNewCar('Fiat', 'Ducato', '100');
        await garagePage.verifyLastAddedCarName('Fiat Ducato');
    })

    test(('Add Ford Fiesta'), async () => {
        await garagePage.addNewCar('Ford', 'Fiesta', '100');
        await garagePage.verifyLastAddedCarName('Ford Fiesta');
    })

})

/*test.describe(('GaragePage2 with POM'), () => {
    test.use({ storageState: 'test-data/states/mainUser2State.json' });
    let homePage: HomePage;
    let signInForm: SignInForm;
    let garagePage: GaragePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signInForm = new SignInForm(page);
        garagePage = new GaragePage(page);
        await garagePage.open();

    })

    test(('Add BMW X5'), async () => {
        await garagePage.addNewCar('BMW', 'X5', '100');
        await garagePage.verifyLastAddedCarName('BMW X5');
    })

    test(('Add Audi TT'), async ({ page }) => {
        await garagePage.addNewCar('Audi', 'TT', '100');
        await garagePage.verifyLastAddedCarName('Audi TT');
    })

    test(('Add Fiat Ducato'), async () => {
        await garagePage.addNewCar('Fiat', 'Ducato', '100');
        await garagePage.verifyLastAddedCarName('Fiat Ducato');
    })

    test(('Add Ford Fiesta'), async () => {
        await garagePage.addNewCar('Ford', 'Fiesta', '100');
        await garagePage.verifyLastAddedCarName('Ford Fiesta');
    })

})*/