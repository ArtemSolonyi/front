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
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("../http");
const cookie_1 = require("../cookie");
class AuthService {
    static login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const sentData = yield http_1.$api.post('auth/login', { email, password });
            (0, cookie_1.setCookie)('accessToken', sentData.data.accessToken);
            (0, cookie_1.setCookie)('refreshToken', sentData.data.refreshToken);
            return sentData;
        });
    }
    static registration(email, username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const sentData = yield http_1.$api.post('auth/register', { email, password, username });
            (0, cookie_1.setCookie)('accessToken', sentData.data.accessToken);
            (0, cookie_1.setCookie)('refreshToken', sentData.data.refreshToken);
            return sentData;
        });
    }
    static checkAuth(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const refresh = yield http_1.$api.post('auth/refresh', { refreshToken: refreshToken });
            console.log(refresh, 'response refreshTOken');
            return refresh.data;
        });
    }
    static logout(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield http_1.$api.delete(`auth/logout/?userId=${userId}`);
        });
    }
}
exports.default = AuthService;
