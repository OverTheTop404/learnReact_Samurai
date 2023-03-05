import React from "react";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'profile/posts/ADD_POST'
const GET_PROFILE_USER = 'profile/getUser/GET_PROFILE_USER'
const SET_STATUS = 'profile/status/SET_STATUS'

let initialState = {
    posts: [
        {id: 0, message: 'Today I learn react', likeCount: 100501},
        {id: 1, message: 'This is my second post', likeCount: 57},
        {id: 2, message: 'This is my first post', likeCount: 35},
    ],
    userInfo: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: state.posts.length, message: action.postText, likeCount: 0}
                ],
                newPostText: ''
            }
        case GET_PROFILE_USER:
            return {...state, userInfo: action.userInfo}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPost = postText => ({type: ADD_POST, postText})
export const loadUserInfo = userInfo => ({type: GET_PROFILE_USER, userInfo})
export const setStatus = status => ({type: SET_STATUS, status})

export const userPageInfo = userId => async (dispatch) => {
    let data = await usersAPI.getProfile(userId)
    dispatch(loadUserInfo(data))
}

export const setUserStatus = userId => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateUserStatus = status => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) dispatch(setStatus(status))
}

export default profileReducer