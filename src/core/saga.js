import { all } from 'redux-saga/effects';
import {watchUserAuth} from '../models/UserAuth/sagaAuth.js'
import {movieWatcher} from "../models/Movie/sagaMovie";

export function* rootSaga() {
    yield all([watchUserAuth(),movieWatcher()]);


}