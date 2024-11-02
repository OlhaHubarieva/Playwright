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

    test(('Add user car'), async () => {

        const response = await carsController.addUserCar(sid, 1, 2, 2000);
        expect(response.status()).toBe(201);
        const body = await response.json();
        console.log(body);
        const carBrand = body.data.brand;
        const carModel = body.data.model;
        const carMileage = body.data.mileage;
        expect(carBrand).toBe('Audi');
        expect(carModel).toBe('R8');
        expect(carMileage).toBe(2000);
    })

    test('Add user car with invalid mileage', async () => {

        const response = await carsController.addUserCar(sid, 2, 4, -1500);
        expect(response.status()).toBe(400);
        const responseBody = await response.json();
        expect(responseBody.message).toContain("Mileage has to be from 0 to 999999");
    });

    test('Add user car without mileage', async ({ request }) => {

        const carBrandId = 1;
        const carModelId = 2;

        const response = await request.post('/api/cars', {
            headers: {

                'Cookie': `sid=${sid}`
            },

            data: {

                "carBrandId": carBrandId,
                "carModelId": carModelId

            }
        });

        expect(response.status()).toBe(400);
        const responseBody = await response.json();
        expect(responseBody.message).toContain("Mileage is required");

    });

})