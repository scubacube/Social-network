import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '41526c8b-f18c-49ca-a706-3d8195946c29'
    }
});
export const usersAPI = {
    getUsersAPI(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`).then(e => e.data)
        )
    },
    followUserAPI(id) {
        return (
            instance.post(`follow/${id}`)
        )
    },
    unfollowUserAPI(id) {
        return (
            instance.delete(`follow/${id}`)
        )
    }
}
export const profileAPI = {
    setProfileAPI(userId) {
        return (
            instance.get(`profile/`+ userId)
        )
    },
    setStatusAPI(userId) {
        return (
            instance.get(`profile/status/` + userId)
        )
    },
    updateStatusAPI(status) {
        return (
            instance.put(`profile/status`, {status: status})
        )
    }
}
export const authAPI = {
    authMeAPI() {
        return (
            instance.get(`auth/me`)
        )
    },
    loginAPI(email, password, rememberMe = false) {
        return (
            instance.post(`auth/login`, {email, password, rememberMe})
        )
    },
    logoutAPI() {
        return (
            instance.delete(`auth/login`)
        )
    }
}