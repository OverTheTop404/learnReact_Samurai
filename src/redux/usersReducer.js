import {followAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const LOAD_USERS = 'LOAD_USERS'
const TOTAL_PAGES = 'TOTAL_PAGES'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const LOADER = 'LOADER'
const FOLLOWED_PROCESS = 'FOLLOWED_PROCESS'

let initialState = {
    persons: [],
    currentPage: 1,
    totalPagesCount: 0,
    itemsCount: 10,
    isFetched: false,
    followedProcess: []
}

const followHelper = (persons, userId, objProps = {}) => {
    return persons.map(user => {
        if (user.id === userId) {
            return {...user, ...objProps}
        }
        return user
    })
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, persons: followHelper(state.persons, action.userId, {followed: true})}
        case UNFOLLOW:
            return {...state, persons: followHelper(state.persons, action.userId, {followed: false})}
        case LOAD_USERS:
            return {...state, persons: action.users}
        case TOTAL_PAGES:
            return {...state, totalPagesCount: action.count}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.current}
        case LOADER:
            return {...state, isFetched: action.status}
        case FOLLOWED_PROCESS:
            return {
                ...state,
                followedProcess: action.inProcess
                    ? [...state.followedProcess, action.userId]
                    : state.followedProcess.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followed = userId => ({type: FOLLOW, userId})
export const unFollowed = userId => ({type: UNFOLLOW, userId})
export const loadUsers = users => ({type: LOAD_USERS, users})
export const totalPages = count => ({type: TOTAL_PAGES, count})
export const setCurrentPage = current => ({type: SET_CURRENT_PAGE, current})
export const isFetched = status => ({type: LOADER, status})
export const followedProcess = (inProcess, userId) => ({type: FOLLOWED_PROCESS, inProcess, userId})

export const getUsers = (currentPage, itemsCount) => async dispatch => {
    // dispatch(isFetched(true))
    dispatch(setCurrentPage(currentPage))
    let data = await usersAPI.getUsers(currentPage, itemsCount)
    // dispatch(isFetched(false))
    dispatch(loadUsers(data.items))
    dispatch(totalPages(data.totalCount))
}

const followUnfollow = async (dispatch, personId, methodApi, actionCreator) => {
    dispatch(followedProcess(true, personId))
    let data = await methodApi(personId)
    if (data.resultCode === 0) dispatch(actionCreator(personId))
    dispatch(followedProcess(false, personId))
}

export const follow = personId => async dispatch => {
    await followUnfollow(dispatch, personId, followAPI.usersFollow.bind(followAPI), followed)
}

export const unFollow = personId => async dispatch => {
    await followUnfollow(dispatch, personId, followAPI.usersUnfollow.bind(followAPI), unFollowed)
}

export default usersReducer