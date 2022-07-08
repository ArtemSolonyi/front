import AuthService, {AuthResponse} from "../../services/AuthService";
import {call, takeEvery, put} from 'redux-saga/effects'

import {loginSuccess, LOGOUT, logoutSuccess, REGISTER, LOGIN, registerSuccess} from "../../users/users.reducer";
import {deleteCookie} from "../../cookie";

function* login(userData) {
    try {
        const user = yield call(AuthService.login, userData.payload.enteredEmail, userData.payload.enteredPassword)
        yield put(loginSuccess(user))
    } catch (e) {
        console.log(e)
    }
}

function* registration(userData) {
    try {
        yield call(AuthService.registration, userData.payload.enteredEmail, userData.payload.username, userData.payload.enteredPassword)
        yield put(registerSuccess())
    } catch (e) {
        console.log(e)
    }

}

function* logout() {
    try {
        deleteCookie('accessToken')
        deleteCookie('refreshToken')
        yield put(logoutSuccess())
    } catch (e) {

    }
}

export function* watchUserAuth() {
    yield takeEvery(LOGIN, login)
    yield takeEvery(REGISTER, registration)
    yield takeEvery(LOGOUT, logout)
}