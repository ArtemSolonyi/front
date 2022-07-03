import {$api} from '../http'
import {setCookie} from "../cookie";
import {AxiosResponse} from "axios";


interface IUser {
    username: string,
    email: string,
    password: string
}


export interface AuthResponse {
    accessToken: string;
    refreshToken: string;

}

export default class AuthService {
    static async login(email: string, password: string) {
       const sentData = await $api.post<AuthResponse>('auth/login', {email, password})
        setCookie('accessToken', sentData.data.accessToken)
        setCookie('refreshToken', sentData.data.refreshToken)

    }

    static async registration(email: string, username: string, password: string,) {
        const sentData = await $api.post<AuthResponse>('auth/register', {email, password, username})
        setCookie('accessToken', sentData.data.accessToken)
        setCookie('refreshToken', sentData.data.refreshToken)
    }

    //
    // static async logout(email, password) {
    //     return $api.post()
    // }
}
