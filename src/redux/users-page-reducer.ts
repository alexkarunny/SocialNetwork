const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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
    isFetching: boolean
}

type AllActionType =
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setPage>
    | ReturnType<typeof setTotalUsers>
    | ReturnType<typeof toggleIsFetching>

const initialState: PropsType = {
    users: [],
    page: {
        currentPage: 1,
        pageSize: 10,
        totalUsers: 0
    },
    isFetching: false
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const follow = (userID: string) => {
    return {
        type: FOLLOW,
        userID
    } as const
}
export const unfollow = (userID: string) => {
    return {
        type: UNFOLLOW,
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
