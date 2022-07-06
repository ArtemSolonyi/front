import AuthService, {AuthResponse} from "../../services/AuthService";
import {call, takeEvery, put} from 'redux-saga/effects'
import {LOGIN} from "./user.reducer";
import {loginSuccess, LOGOUT, logoutSuccess, REGISTER, registerSuccess} from "../../users/users.reducer";
import {deleteCookie} from "../../cookie";

function* login(userData) {
    try {
        yield call(AuthService.login, userData.payload.enteredEmail, userData.payload.enteredPassword)
        yield put(loginSuccess())
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
    try{
        deleteCookie('accessToken')
        deleteCookie('refreshToken')
        yield put(logoutSuccess())
    }catch (e){

    }
}

export function* watchUserAuth() {
    yield takeEvery(LOGIN, login)
    yield takeEvery(REGISTER, registration)
    yield takeEvery(LOGOUT, logout)
}