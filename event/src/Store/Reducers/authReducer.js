import actiontypes from "../actiontypes";

const initState = {
    token: null,
    error: null,
    loading: false, 
    userId: null,
    name: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {

        case actiontypes().auth.loading:
            return{
                ...state,
                loading: true 
            }
        
        case actiontypes().auth.authFailure:
            return{
                ...state,
                loading:false,
                error: action.payload
            }

        case actiontypes().auth.authSuccess:
            localStorage.setItem('token', action.payload)
            localStorage.setItem('userId', action.userId)
            localStorage.setItem('name', action.name)
            return{
                loading:false,
                error: null,
                token: action.payload,
                userId: action.userId,
                name: action.name
            }
        
        case actiontypes().auth.logout:
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            localStorage.removeItem('name')
            return{
                ...initState
            }
        default:
            return state
    }
}

export default authReducer