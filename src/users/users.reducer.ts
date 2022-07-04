const initialState = {
    isAuth: false,
    kaif:true
};
export const LOGIN = "LOGIN"
export const loginCreator = (data: any) => ({
    type: LOGIN, payload: data
})
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
})

export const usersReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return (
                {
                    ...state, isAuth: true
                })
        default:
            return state
    }
}