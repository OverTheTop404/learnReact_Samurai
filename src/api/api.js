import axios from "axios";

const configRequest = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY' : '404304df-21cc-4bf9-8dde-ffefd68724e7'
    }
})

export const usersAPI = {
    getUsers(currentPage, itemsCount){
        return configRequest.get(`users?page=${currentPage}&count=${itemsCount}`).then(response => response.data)
    },
    getProfile(userId){
        return configRequest.get(`profile/${userId}`).then(response => response.data)
    }
}

export const followAPI = {
    usersFollow(personId){
        return configRequest.post(`follow/${personId}`, {}).then(response => response.data)
    },
    usersUnfollow(personId){
        return configRequest.delete(`follow/${personId}`).then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
        return configRequest.get(`auth/me`).then(response => response.data)
    },
    authLogin(email, password, rememberMe) {
        return configRequest.post(`auth/login`, {email, password, rememberMe})
    },
    authLogout() {
        return configRequest.delete(`auth/login`)
    }
}

export const profileAPI = {
    profile(userId) {
        return configRequest.get(`profile/${userId}`)
    },
    getUserStatus(userId) {
        return configRequest.get(`/profile/status/${userId}`)
    },
    updateUserStatus(status) {
        return configRequest.put(`/profile/status`, {status})
    }
}