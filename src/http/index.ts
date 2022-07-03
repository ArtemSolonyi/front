import axios, {AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse} from "axios"
import {getCookie, setCookie} from "../cookie";
import {AuthResponse} from "../services/AuthService";

export const API_URL = 'http://localhost:3003/api/v1/'

export const $api = axios.create({
    withCredentials: false,
    baseURL: API_URL
})


$api.interceptors.request.use((config) => {
    config.headers = {
        Authorization: getCookie('accessToken')
    };
    return config
})

$api.interceptors.response.use(async (config: AxiosResponse) => {
    if (config.status == 401) {
        const sentRefreshToken = await $api.post<AuthResponse>('auth/refresh', {refreshToken: getCookie('refreshToken')})
        if (sentRefreshToken.status !== 422) {
            setCookie('accessToken', sentRefreshToken.data.accessToken)
            setCookie('refreshToken', sentRefreshToken.data.refreshToken)
        }

    }
    return config
})

