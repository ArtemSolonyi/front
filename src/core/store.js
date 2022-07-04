import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {usersReducer} from "../users/users.reducer";
import {rootSaga} from "./saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;


const reducers = combineReducers({
    usersReducer,
});
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
export default store

