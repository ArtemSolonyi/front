import axios, {AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse} from "axios"
import {deleteCookie, getCookie, setCookie} from "../cookie";
import {AuthResponse} from "../services/AuthService";
// @ts-ignore
import store from '../core/store';
import {logoutSuccess} from "../users/users.reducer";
export const API_URL = 'http://localhost:3005/api/v1/'

export const $api = axios.create({
    withCredentials: false,
    baseURL: API_URL
})


$api.interceptors.request.use((config) => {
    console.log('request')
    config.headers = {
        Authorization: getCookie('accessToken')
    };
    return config
})

$api.interceptors.response.use(async (config: AxiosResponse) => {
    console.log('outside response')
    console.log(config.status)
    return config
},async function(error){
    const request = error.request

    console.log(error.response.status)
    if (error.response.status == 401 && !error?.config.retry) {
        request.retry = true
        console.log('inside response')
        try {
            const sentRefreshToken = await $api.put<AuthResponse>('auth/refresh', {refreshToken: getCookie('refreshToken')})
            setCookie('accessToken', sentRefreshToken.data.accessToken)
            setCookie('refreshToken', sentRefreshToken.data.refreshToken)
            return request
        }catch (e) {
            deleteCookie('accessToken');
            deleteCookie('refreshToken');
            store.dispatch(logoutSuccess());
        }
    }
    throw error;

})

