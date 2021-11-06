import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "88c27098-d58c-439b-a5fb-d6a202fce25b"
    }
})

export const usersAPI = {
    getUser(userId: string) {
        return instance.get(`profile/${userId}`)
            .then((response: AxiosResponse) => response.data)
    },
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response: AxiosResponse) => response.data)
    },
    followUser(userId: string) {
        return instance.post(`follow/${userId}`, {})
            .then((response: AxiosResponse) => response.data)
    },
    unfollowUser(userId: string) {
        return instance.delete(`follow/${userId}`)
            .then((response: AxiosResponse) => response.data)
    }
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
            .then((response: AxiosResponse) => response.data)
    }
}
