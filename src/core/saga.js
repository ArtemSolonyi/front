import { all } from 'redux-saga/effects';
import {watchUserAuth} from '../models/UserAuth/sagaAuth.js'

export function* rootSaga() {
    yield all([watchUserAuth()]);

}