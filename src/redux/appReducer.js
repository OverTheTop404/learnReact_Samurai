import {getUserAuthData} from "./authReducer";

const INITIALIZED = 'INITIALIZED'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return {initialized: true}
        default:
            return state
    }
}

export const initialize = () => ({type: INITIALIZED})


export const setInitialize = () => (dispatch) => {
    let authSuccess = dispatch(getUserAuthData())
    Promise.all([authSuccess]).then(() => {
        dispatch(initialize())
    })

}


export default appReducer