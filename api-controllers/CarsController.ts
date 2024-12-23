import { Request } from "@playwright/test";
class CarsController {
    private request;

    constructor(request) {
        this.request = request;
    }

    async getUserCars(cookies: string) {

        return await this.request.get('https://qauto.forstudy.space/api/cars', {
            headers: {
                'Cookie': `sid = ${cookies}`
            }

        });
    }

    async addUserCar(cookies: string, carBrandId: number, carModelId: number, mileage: number) {
        return await this.request.post('https://qauto.forstudy.space/api/cars', {
            headers: {
                'Cookie': `sid=${cookies}`
            },
            data: {
                "carBrandId": carBrandId,
                "carModelId": carModelId,
                "mileage": mileage
            }

        });
    }

    }

export default CarsController;