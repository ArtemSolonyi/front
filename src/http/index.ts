import axios, {AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse} from "axios"
import {deleteCookie, getCookie, setCookie} from "../cookie";
import {AuthResponse} from "../services/AuthService";
// @ts-ignore

import store from '../core/store';
import {logoutSuccess} from "../users/users.reducer";


export const API_URL = 'http://localhost:3005/api/v1/'

export const $api = axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    baseURL: API_URL
})


$api.interceptors.request.use((config) => {
    console.log('request')
    // @ts-ignore
    config.headers['Authorization'] = getCookie('accessToken')
    console.log(config, 'XXX REQUEST ')
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async function (error) {
    const originalRequest = error.config
    if (error.response.status == 401 && error.config && !error?.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const sentRefreshToken = await $api.post<AuthResponse>('auth/refresh', {refreshToken: getCookie('refreshToken')})
            setCookie('accessToken', sentRefreshToken.data.accessToken)
            setCookie('refreshToken', sentRefreshToken.data.refreshToken)
            originalRequest.headers['Authorization'] = getCookie('accessToken')
            return $api.request(originalRequest)
        } catch (e) {
            console.log(e)
            return e
        }
    }
    throw error
})

