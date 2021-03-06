import {call, takeEvery, put} from 'redux-saga/effects'
import {MovieService} from "../../services/MovieService";
import {
    GET_CATEGORIES, GET_MOVIE, GET_MOVIES,
    GET_MOVIES_OF_CATEGORY,
    CREATE_MOVIE,
    getCategoriesSuccess,
    getMoviesOfCategorySuccess,
    createCategorySuccess,
    getMoviesSuccess, getMovieSuccess, SET_RATING, setRatingSuccess, CREATE_CATEGORY
} from "./movie.reducer";

function* getCategories() {
    const categories = yield call(MovieService.getCategories)
    yield put(getCategoriesSuccess(categories))
}

function* getAllMovies(){
    const movies = yield call(MovieService.getMovies)
    yield put(getMoviesSuccess(movies))
}
function* getMovie(data){
     const movie = yield call(MovieService.getMovie,data.payload)
     yield put(getMovieSuccess(movie))
}

function* getMoviesOfCategory(data){
    const categories = yield call(MovieService.getMovieOfCategory,data.payload)
    yield put(getMoviesOfCategorySuccess(categories))
}
function* setStarRatingToMovie(data){
    const setRating = yield call(MovieService.setRating,data.payload)
    yield put(setRatingSuccess(setRating))
}
function* _createMovie(data){
     yield call(MovieService._createMovie,data)
}
function* _createCategory(data){
    const category = yield call(MovieService._createCategory,data)
    yield put(createCategorySuccess(category))
}
export function* movieWatcher() {
    yield takeEvery(GET_MOVIES,getAllMovies)
    yield takeEvery(GET_MOVIE,getMovie)
    yield takeEvery(GET_CATEGORIES, getCategories)
    yield takeEvery(GET_MOVIES_OF_CATEGORY, getMoviesOfCategory)
    yield takeEvery(SET_RATING,setStarRatingToMovie)
    yield takeEvery(CREATE_MOVIE,_createMovie)
    yield takeEvery(CREATE_CATEGORY,_createCategory)
}





