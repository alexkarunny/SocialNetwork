const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';

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
type PropsType = {
    users: UserPropsType[]
    page: PagePropsType
}

type AllActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setPageAC>
    | ReturnType<typeof setTotalUsersAC>

const initialState: PropsType = {
    users: [],
    page: {
        currentPage: 1,
        pageSize: 100,
        totalUsers: 0
    }
}

export const usersPageReducer = (state: PropsType = initialState, action: AllActionType): PropsType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => (user.id === action.userID) ? {...user, followed: true} : user)
            }
        case UNFOLLOW:
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
        default:
            return state
    }
}

export const followAC = (userID: string) => {
    return {
        type: FOLLOW,
        userID
    } as const
}
export const unfollowAC = (userID: string) => {
    return {
        type: UNFOLLOW,
        userID
    } as const
}
export const setUsersAC = (users: UserPropsType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const setPageAC = (currentPage: number) => {
    return {
        type: SET_PAGE,
        currentPage
    } as const
}
export const setTotalUsersAC = (totalUsers: number) => {
    return {
        type: SET_TOTAL_USERS,
        totalUsers
    } as const
}
