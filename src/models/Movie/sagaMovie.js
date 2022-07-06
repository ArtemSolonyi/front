import {call, takeEvery, put} from 'redux-saga/effects'
import {MovieService} from "../../services/MovieService";
import {
    GET_CATEGORIES, GET_MOVIES,
    GET_MOVIES_OF_CATEGORY,
    getCategoriesSuccess,
    getMoviesOfCategorySuccess,
    getMoviesSuccess
} from "./movie.reducer";

function* getCategories() {
    const categories = yield call(MovieService.getCategories)
    yield put(getCategoriesSuccess(categories))
}
function* getAllMovies(){
    const movies = yield call(MovieService.getMovie)
    yield put(getMoviesSuccess(movies))
}
function* getMoviesOfCategory(data){
    const categories = yield call(MovieService.getMovieOfCategory,data.payload)
    yield put(getMoviesOfCategorySuccess(categories))
}
export function* movieWatcher() {
    yield takeEvery(GET_MOVIES,getAllMovies)
    yield takeEvery(GET_CATEGORIES, getCategories)
    yield takeEvery(GET_MOVIES_OF_CATEGORY, getMoviesOfCategory)
}