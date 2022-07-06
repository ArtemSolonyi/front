"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersReducer = exports.logoutSuccess = exports.LOGOUT_SUCCESS = exports.registerSuccess = exports.REGISTER_SUCCESS = exports.loginSuccess = exports.LOGIN_SUCCESS = exports.registerCreater = exports.REGISTER = exports.loginCreator = exports.LOGIN = exports.logoutCreater = exports.LOGOUT = void 0;
const initialState = {
    isAuth: false,
    kaif: true
};
exports.LOGOUT = "LOGOUT";
const logoutCreater = () => ({ type: exports.LOGOUT });
exports.logoutCreater = logoutCreater;
exports.LOGIN = "LOGIN";
const loginCreator = (data) => ({ type: exports.LOGIN, payload: data });
exports.loginCreator = loginCreator;
exports.REGISTER = "REGISTER";
const registerCreater = (data) => ({ type: exports.REGISTER, payload: data });
exports.registerCreater = registerCreater;
exports.LOGIN_SUCCESS = "LOGIN_SUCCESS";
const loginSuccess = () => ({ type: exports.LOGIN_SUCCESS });
exports.loginSuccess = loginSuccess;
exports.REGISTER_SUCCESS = "REGISTER_SUCCESS";
const registerSuccess = () => ({ type: exports.REGISTER_SUCCESS });
exports.registerSuccess = registerSuccess;
exports.LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const logoutSuccess = () => ({ type: exports.LOGOUT_SUCCESS });
exports.logoutSuccess = logoutSuccess;
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case exports.LOGIN_SUCCESS:
            return (Object.assign(Object.assign({}, state), { isAuth: true }));
        case exports.REGISTER_SUCCESS:
            return (Object.assign(Object.assign({}, state), { isAuth: true }));
        case exports.LOGOUT_SUCCESS:
            return (Object.assign(Object.assign({}, state), { isAuth: false }));
        default:
            return state;
    }
};
exports.usersReducer = usersReducer;
