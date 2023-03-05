import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'auth-set-data/SET_USER_DATA'
const SET_USER_INFO = 'auth-set-user-info/SET_USER_INFO'
const LOADER = 'auth-loader/LOADER'

let initialState = {
    userData: null,
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetched: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case SET_USER_INFO:
            return {...state, userData: action.userData}
        case LOADER:
            return {...state, isFetched: action.status}
        default:
            return state
    }
}

export const userAuth = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}})
export const userInfo = userData => ({type: SET_USER_INFO, userData})
export const isFetched = status => ({type: LOADER, status})

export const getUserAuthData = () => async (dispatch) => {
    let authData = await authAPI.authMe()
    if (authData.resultCode === 0) {
        let {id, email, login} = authData.data
        dispatch(userAuth(id, email, login, true))
        let profileData = await profileAPI.profile(authData.data.id)
        dispatch(userInfo(profileData.data))
    }
}

export const authLogin = dataForm => async (dispatch) => {
    let response = await authAPI.authLogin(dataForm.email, dataForm.password, dataForm.rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getUserAuthData())
    } else {
        let messageError = response.data.messages.length ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: messageError}))
    }
}

export const authLogout = () => async (dispatch) => {
    dispatch(isFetched(true))
    let response = await authAPI.authLogout()
    if (response.data.resultCode === 0) {
        dispatch(userAuth(null, null, null, false))
        dispatch(userInfo(null))
        dispatch(isFetched(false))
    }
}

export default authReducer