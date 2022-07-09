"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersReducer = exports.logoutSuccess = exports.LOGOUT_SUCCESS = exports.registerSuccess = exports.REGISTER_SUCCESS = exports.loginSuccess = exports.LOGIN_SUCCESS = exports.registerCreater = exports.REGISTER = exports.loginCreator = exports.LOGIN = exports.logoutCreater = exports.LOGOUT = exports.checkAuthCreator = exports.CHECK_AUTH = void 0;
const initialState = {
    isAuth: false,
    loading: false,
    user: {},
};
exports.CHECK_AUTH = 'CHECK_AUTH';
const checkAuthCreator = (data) => ({ type: exports.CHECK_AUTH, payload: data });
exports.checkAuthCreator = checkAuthCreator;
exports.LOGOUT = "LOGOUT";
const logoutCreater = (userId) => ({ type: exports.LOGOUT, payload: userId });
exports.logoutCreater = logoutCreater;
exports.LOGIN = "LOGIN";
const loginCreator = (data) => ({ type: exports.LOGIN, payload: data });
exports.loginCreator = loginCreator;
exports.REGISTER = "REGISTER";
const registerCreater = (data) => ({ type: exports.REGISTER, payload: data });
exports.registerCreater = registerCreater;
exports.LOGIN_SUCCESS = "LOGIN_SUCCESS";
const loginSuccess = (user) => ({ type: exports.LOGIN_SUCCESS, user: user });
exports.loginSuccess = loginSuccess;
exports.REGISTER_SUCCESS = "REGISTER_SUCCESS";
const registerSuccess = () => ({ type: exports.REGISTER_SUCCESS });
exports.registerSuccess = registerSuccess;
exports.LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const logoutSuccess = () => ({ type: exports.LOGOUT_SUCCESS });
exports.logoutSuccess = logoutSuccess;
const usersReducer = (state = initialState, action) => {
    var _a, _b;
    switch (action.type) {
        case exports.LOGIN_SUCCESS:
            return (Object.assign(Object.assign({}, state), { isAuth: true, user: (_b = (_a = action.user) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.user }));
        case exports.REGISTER_SUCCESS:
            return (Object.assign(Object.assign({}, state), { isAuth: true }));
        case exports.LOGOUT_SUCCESS:
            return (Object.assign(Object.assign({}, state), { isAuth: false }));
        default:
            return state;
    }
};
exports.usersReducer = usersReducer;
