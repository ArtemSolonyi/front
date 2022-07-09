import {$api} from '../http'
import {setCookie} from "../cookie";


interface IUser {
    username: string,
    email: string,
    password: string
}


export interface AuthResponse {
    accessToken: string;
    refreshToken: string;


}

export interface EmptyResponse {

}

export default class AuthService {
    static async login(email: string, password: string) {
        const sentData = await $api.post<AuthResponse>('auth/login', {email, password})
        setCookie('accessToken', sentData.data.accessToken)
        setCookie('refreshToken', sentData.data.refreshToken)
        return sentData
    }


    static async registration(email: string, username: string, password: string,) {
        const sentData = await $api.post<AuthResponse>('auth/register', {email, password, username})
        setCookie('accessToken', sentData.data.accessToken)
        setCookie('refreshToken', sentData.data.refreshToken)
        return sentData
    }

    static async checkAuth(refreshToken: string) {
        const refresh = await $api.post<EmptyResponse>('auth/refresh', {refreshToken: refreshToken})
        console.log(refresh,'response refreshTOken')
        return refresh.data
    }

    static async logout(userId: string) {
        return await $api.delete<EmptyResponse>(`auth/logout/?userId=${userId}`)
    }
}
