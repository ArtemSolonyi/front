import AuthService, {AuthResponse} from "../../services/AuthService";
import {call, takeEvery, put} from 'redux-saga/effects'
import {LOGIN} from "./user.reducer";
import {loginSuccess} from "../../users/users.reducer";
import {$api} from "../../http";
import {setCookie} from "../../cookie";


function* login(userData) {
    try {
        yield call(AuthService.login,userData.payload.enteredEmail, userData.payload.enteredPassword)

        yield put(loginSuccess())
    } catch (e) {
        console.log(e)
    }

}

export function* watchUserAuth() {
    yield takeEvery(LOGIN, login)
}