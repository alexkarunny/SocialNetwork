import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

type PhotosType = {
    small: string
    large: string
}
export type UserPropsType = {
    id: string
    followed: boolean
    name: string
    status: string
    photos: PhotosType
}
export type PagePropsType = {
    totalUsers: number
    pageSize: number
    currentPage: number
}
export type UsersPagePropsType = {
    users: UserPropsType[]
    page: PagePropsType
    isFetching: boolean
    followingInProgress: string[]
}

type AllActionType =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setPage>
    | ReturnType<typeof setTotalUsers>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

const initialState: UsersPagePropsType = {
    users: [],
    page: {
        currentPage: 1,
        pageSize: 10,
        totalUsers: 0
    },
    isFetching: false,
    followingInProgress: []
}

export const usersPageReducer = (state: UsersPagePropsType = initialState, action: AllActionType): UsersPagePropsType => {
    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state,
                users: state.users.map(user => (user.id === action.userID) ? {...user, followed: true} : user)
            }
        case UNFOLLOW_SUCCESS:
            return {
                ...state,
                users: state.users.map(user => (user.id === action.userID) ? {...user, followed: false} : user)
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_PAGE:
            return {
                ...state,
                page: {
                    ...state.page,
                    currentPage: action.currentPage
                }
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                page: {
                    ...state.page,
                    totalUsers: action.totalUsers
                }
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}

export const followSuccess = (userID: string) => {
    return {
        type: FOLLOW_SUCCESS,
        userID
    } as const
}
export const unfollowSuccess = (userID: string) => {
    return {
        type: UNFOLLOW_SUCCESS,
        userID
    } as const
}
export const setUsers = (users: UserPropsType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const setPage = (currentPage: number) => {
    return {
        type: SET_PAGE,
        currentPage
    } as const
}
export const setTotalUsers = (totalUsers: number) => {
    return {
        type: SET_TOTAL_USERS,
        totalUsers
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}
export const toggleFollowingProgress = (isFetching: boolean, userID: string) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        isFetching,
        userID
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setPage(currentPage))
        usersAPI.getUsers(currentPage, pageSize)
            .then((response) => {
                debugger
                dispatch(setUsers(response.data.items))
                dispatch(setTotalUsers(response.data.totalCount))
                dispatch(toggleIsFetching(false))
            })
    }
}

export const unfollow = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollowUser(userId)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const follow = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.followUser(userId)
            .then((response) => {
                debugger
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}


