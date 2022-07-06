export const GET_CATEGORIES = 'GET_CATEGORIES'
export const getCategories = () => ({type: GET_CATEGORIES})

export const GET_MOVIES_OF_CATEGORY = 'GET_MOVIES_OF_CATEGORY'
export const getMoviesOfCategory = (data) => ({type: GET_MOVIES_OF_CATEGORY, payload: data})

export const GET_MOVIES_OF_CATEGORY_SUCCESS = 'GET_MOVIES_OF_CATEGORY_SUCCESS'
export const getMoviesOfCategorySuccess = (data) => ({type: GET_MOVIES_OF_CATEGORY_SUCCESS, payload: data})

export const GET_MOVIES = 'GET_MOVIES'
export const getMovies = () => ({type: GET_MOVIES})

export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'
export const getMoviesSuccess = (data) => ({type: GET_MOVIES_SUCCESS, payload: data})

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const getCategoriesSuccess = (data) => ({type: GET_CATEGORIES_SUCCESS, payload: data})
const initialState = {
    categories: undefined,
    movies: undefined
};
export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES_SUCCESS:
            return ({
                ...state, categories: action.payload,
            })
        case GET_MOVIES_OF_CATEGORY_SUCCESS:
            return ({
                ...state, movies: action.payload,
            })
        case GET_MOVIES_SUCCESS:
            return ({
                ...state, movies: action.payload,
            })
        default:
            return ({...state})
    }
}

