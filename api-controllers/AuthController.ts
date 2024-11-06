import { Request } from "@playwright/test";
class AuthController {
    private request;

    constructor(request) {
        this.request = request;
    }

    async signInAndGetCookies(email: string, password: string) {
        let sid: string = '';
        const authRequest = await this.request.post('https://qauto.forstudy.space/api/auth/signin', {
            data: {

                "email": email,
                "password": password,
                "remember": false

            }
        })

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
        return sid;
    }

    async deleteUser(sid: string) {
        return await this.request.delete('https://qauto.forstudy.space/api/users', {
            headers: {
                'Cookie': `sid=${sid}`
            }
        });
    }

    async createUser(name: string, lastName: string, email: string, password: string, sid: string) {
        return await this.request.post('https://qauto.forstudy.space/api/auth/signup', {
            data: {
                name,
                lastName,
                email,
                password,
                repeatPassword: password
            },
            headers: {
                'Cookie': `sid=${sid}`
            }
        })

    }

}

export default AuthController;