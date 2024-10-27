import test, { chromium, expect } from "@playwright/test";
import { mainUserEmail, mainUserPassword } from "../../test-data/credentials";
import AuthController from "../../api-controllers/AuthController";
import CarsController from "../../api-controllers/CarsController";

test.describe(('API requests'), () => {

    let carsController: CarsController;
    let sid: string;

    test.beforeAll(async ({ request }) => {

        const authController = new AuthController(request);
        sid = await authController.signInAndGetCookies(mainUserEmail, mainUserPassword);

    })

    test.beforeEach(async ({ request }) => {

        carsController = new CarsController(request);

    })

    test(('GET user cars'), async ({ request }) => {

        console.log(await request.storageState());
        const response = await carsController.getUserCars(sid);
        const body = await response.json();
        expect(body.data.length).toBeGreaterThan(0);
    })

})