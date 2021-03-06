import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '1e237d6d-30bb-4acf-92f8-26a9f20c1047'
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
    },
    savePhotoAPI(photo) {
        const formData = new FormData();
        formData.append("image", photo);
        return (
            instance.put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    },
    saveProfileAPI(profile) {
        return (
            instance.put(`profile`, profile)
        )
    }
}
export const authAPI = {
    authMeAPI() {
        return (
            instance.get(`auth/me`)
        )
    },
    loginAPI(email, password, rememberMe = false, captcha = null) {
        return (
            instance.post(`auth/login`, {email, password, rememberMe, captcha})
        )
    },
    logoutAPI() {
        return (
            instance.delete(`auth/login`)
        )
    }
}
export const securityPI = {
    getCaptchaUrlAPI() {
        return (
            instance.get(`security/get-captcha-url`)
        )
    }
}