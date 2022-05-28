import axios from 'axios'
import actiontypes from '../actiontypes'
import jwt_decode from 'jwt-decode'


export const registerUser = user => {
    return async dispatch => {
        dispatch(authLoading())
        try{
            const res = await axios.post('http://localhost:8080/register', user)
            if(res.status === 201){
                dispatch(authSuccess(res.data.accessToken, res.data.user.id, res.data.user.firstName))
            }
        }
        catch(err) {
            dispatch(authFailure(err.message))
        }
    }
}

export const loginUser = user => {
    return async dispatch => {
        dispatch(authLoading())
        try {
            const res = await axios.post('http://localhost:8080/login', user)
            if(res.status === 200){
                dispatch(authSuccess(res.data.accessToken, res.data.user.id, res.data.user.firstName))
            }
        } catch (err) {
            dispatch(authFailure(err.message))
        }
    }
}

export const logoutUser = () => {
    return {
        type: actiontypes().auth.logout
    }
}

export const checkUser = () => {
    return dispatch => {
        let token = localStorage.getItem('token')
        let userId = localStorage.getItem('userId')
        let name = localStorage.getItem('name')

        if(token){
         if(jwt_decode(token).exp * 1000 > Date.now()) {
            dispatch(authSuccess(token, userId, name))
        } else {
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            localStorage.removeItem('name')
            dispatch(logoutUser())
        }}
    }
}


const authLoading = () => {
    return {
        type: actiontypes().auth.loading
    }
}

const authFailure = (err) => {
    return {
        type: actiontypes().auth.authFailure,
        payload: err
    }
}

const authSuccess = (token, userId, name) => {
    return {
        type: actiontypes().auth.authSuccess,
        payload: token,
        userId: userId,
        name: name
    }
}