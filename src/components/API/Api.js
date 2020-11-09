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
    }
}

export const authAPI = {
    authMeAPI() {
        return (
            instance.get(`auth/me`)
        )
    }
}