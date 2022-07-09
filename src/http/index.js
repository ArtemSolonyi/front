"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.$api = exports.API_URL = void 0;
const axios_1 = __importDefault(require("axios"));
const cookie_1 = require("../cookie");
exports.API_URL = 'http://localhost:3005/api/v1/';
exports.$api = axios_1.default.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    baseURL: exports.API_URL
});
exports.$api.interceptors.request.use((config) => {
    console.log('request');
    // @ts-ignore
    config.headers['Authorization'] = (0, cookie_1.getCookie)('accessToken');
    console.log(config, 'XXX REQUEST ');
    return config;
});
exports.$api.interceptors.response.use((config) => {
    return config;
}, function (error) {
    return __awaiter(this, void 0, void 0, function* () {
        const originalRequest = error.config;
        if (error.response.status == 401 && error.config && !(error === null || error === void 0 ? void 0 : error.config._isRetry)) {
            originalRequest._isRetry = true;
            try {
                const sentRefreshToken = yield exports.$api.post('auth/refresh', { refreshToken: (0, cookie_1.getCookie)('refreshToken') });
                (0, cookie_1.setCookie)('accessToken', sentRefreshToken.data.accessToken);
                (0, cookie_1.setCookie)('refreshToken', sentRefreshToken.data.refreshToken);
                originalRequest.headers['Authorization'] = (0, cookie_1.getCookie)('accessToken');
                return exports.$api.request(originalRequest);
            }
            catch (e) {
                console.log(e);
                return e;
            }
        }
        throw error;
    });
});
