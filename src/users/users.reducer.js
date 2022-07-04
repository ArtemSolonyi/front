"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersReducer = exports.loginSuccess = exports.LOGIN_SUCCESS = exports.loginCreator = exports.LOGIN = void 0;
const initialState = {
    isAuth: false,
    kaif: true
};
exports.LOGIN = "LOGIN";
const loginCreator = (data) => ({
    type: exports.LOGIN, payload: data
});
exports.loginCreator = loginCreator;
exports.LOGIN_SUCCESS = "LOGIN_SUCCESS";
const loginSuccess = () => ({
    type: exports.LOGIN_SUCCESS
});
exports.loginSuccess = loginSuccess;
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case exports.LOGIN_SUCCESS:
            return (Object.assign(Object.assign({}, state), { isAuth: true }));
        default:
            return state;
    }
};
exports.usersReducer = usersReducer;
