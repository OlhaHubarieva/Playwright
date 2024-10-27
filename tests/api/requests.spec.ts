import test, { chromium, expect } from "@playwright/test";
import { mainUserEmail, mainUserPassword } from "../../test-data/credentials";

test.describe(('API requests'), () => {

    test(('GET car models'), async ({ request }) => {
        const response = await request.get('/api/cars/models');
        const body = await response.json();
        console.log(body);
        // console.log('-------------------------------------');
        // console.log(response);
        const carTitle = body.data[3].title;
        expect(carTitle).toEqual("A6");

    })

    test(('GET car brands'), async ({ request }) => {
        const response = await request.get('/api/cars/brands');
        const body = await response.json();
        console.log(body);
        const brandTitle = body.data[0].title;
        expect(brandTitle).toEqual("Audi");
    })

    /* test(('GET user cars 1'), async ({ request }) => {
 
         console.log('1-------------------------------------');
         console.log(await request.storageState());
         console.log('-------------------------------------');
 
         const authRequest = await request.post('api/auth/signin', {
             data: {
 
                 "email": mainUserEmail,
                 "password": mainUserPassword,
                 "remember": false
 
             }
         })
 
         console.log('2-------------------------------------');
         console.log(await request.storageState());
         console.log('-------------------------------------');
 
         const response = await request.get('/api/cars');
         const body = await response.json();
         console.log(body);
 
         console.log('3-------------------------------------');
         console.log(await request.storageState());
         console.log('-------------------------------------');
 
     })*/

    let sid = String;

    test.beforeAll(async ({ request }) => {

        const authRequest = await request.post('api/auth/signin', {
            data: {

                "email": mainUserEmail,
                "password": mainUserPassword,
                "remember": false

            }
        })

        console.log(authRequest.headers());

        const cookies = authRequest.headers()["set-cookie"];
        if (cookies) {
            const cookieArray = cookies.split("\n");
            for (const cookie of cookieArray) {
                if (cookie.trim().startsWith('sid=')) {
                    sid = (cookie.trim().split('=')[1]).split(';')[0];
                    break;
                }
            }
        }

    })

    /* test.beforeEach(async ({ request }) => {
 
         const authRequest = await request.post('api/auth/signin', {
             data: {
 
                 "email": mainUserEmail,
                 "password": mainUserPassword,
                 "remember": false
 
             }
         })
 
     })*/

    test(('GET user cars 2'), async ({ request }) => {

        console.log(await request.storageState());
        const response = await request.get('/api/cars', {
            headers: {
                'Cookie': `sid = ${sid}`
            }

        });
        const body = await response.json();
        expect(body.data.length).toBeGreaterThan(0);
    })

})