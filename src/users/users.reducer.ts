const initialState = {
    isAuth: false,
    kaif: true
};


export const LOGOUT = "LOGOUT"
export const logoutCreater = () => ({type: LOGOUT})

export const LOGIN = "LOGIN"
export const loginCreator = (data: any) => ({type: LOGIN, payload: data})

export const REGISTER = "REGISTER"
export const registerCreater = (data:any)=> ({type: REGISTER, payload: data})


export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const loginSuccess = () => ({type: LOGIN_SUCCESS})

export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const registerSuccess = () => ({type: REGISTER_SUCCESS})

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const logoutSuccess = () => ({type: LOGOUT_SUCCESS})

export const usersReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return (
                {
                    ...state, isAuth: true
                })
        case REGISTER_SUCCESS:
            return (
                {
                    ...state, isAuth: true
                })
        case LOGOUT_SUCCESS:
            return (
                {
                    ...state, isAuth: false
                })
        default:
            return state
    }
}