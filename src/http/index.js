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
exports.API_URL = 'http://localhost:3003/api/v1/';
exports.$api = axios_1.default.create({
    withCredentials: false,
    baseURL: exports.API_URL
});
exports.$api.interceptors.request.use((config) => {
    config.headers = {
        Authorization: (0, cookie_1.getCookie)('accessToken')
    };
    return config;
});
exports.$api.interceptors.response.use((config) => __awaiter(void 0, void 0, void 0, function* () {
    if (config.status == 401) {
        const sentRefreshToken = yield exports.$api.post('auth/refresh', { refreshToken: (0, cookie_1.getCookie)('refreshToken') });
        if (sentRefreshToken.status !== 422) {
            (0, cookie_1.setCookie)('accessToken', sentRefreshToken.data.accessToken);
            (0, cookie_1.setCookie)('refreshToken', sentRefreshToken.data.refreshToken);
        }
    }
    return config;
}));
