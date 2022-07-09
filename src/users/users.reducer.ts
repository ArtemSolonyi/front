const initialState = {
    isAuth: false,
    loading: false,
    user:{},
};

export const CHECK_AUTH = 'CHECK_AUTH'
export const checkAuthCreator = (data:string)=>({type:CHECK_AUTH,payload:data})


export const LOGOUT = "LOGOUT"
export const logoutCreater = (userId:string) => ({type: LOGOUT,payload:userId})

export const LOGIN = "LOGIN"
export const loginCreator = (data: any) => ({type: LOGIN, payload: data})

export const REGISTER = "REGISTER"
export const registerCreater = (data:any)=> ({type: REGISTER, payload: data})

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const loginSuccess = (user:any) => ({type: LOGIN_SUCCESS,user:user})

export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const registerSuccess = () => ({type: REGISTER_SUCCESS})

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const logoutSuccess = () => ({type: LOGOUT_SUCCESS})

export const usersReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return (
                {
                    ...state, isAuth: true,user:action.user?.data?.user
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