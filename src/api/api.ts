import axios from "axios";
import {ProfileInfoPropsType} from "../redux/profile-page-reducer";
import {UserDataProps} from "../redux/auth-reducer";
import {UserPropsType} from "../redux/users-page-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "88c27098-d58c-439b-a5fb-d6a202fce25b"
    }
})

type AuthMeFollowUserResponseType<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

type GetUsersResponseType = {
    items: UserPropsType[]
    error: string
    totalCount: number
}

export const usersAPI = {
    getProfile(userId: string) {
        return instance.get<ProfileInfoPropsType>(`profile/${userId}`)
    },
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    followUser(userId: string) {
        return instance.post<AuthMeFollowUserResponseType>(`follow/${userId}`, {})
    },
    unfollowUser(userId: string) {
        return instance.delete<AuthMeFollowUserResponseType>(`follow/${userId}`)
    }
}

export const authApi = {
    me() {
        return instance.get<AuthMeFollowUserResponseType<UserDataProps>>(`auth/me`)
    }
}
