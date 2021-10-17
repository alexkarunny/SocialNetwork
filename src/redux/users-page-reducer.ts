const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

type photosType = {
    small: string
    large: string
}
export type userPropsType = {
    id: string
    followed: boolean
    name: string
    status: string
    photos: photosType
}
type PropsType = {
    users: userPropsType[]
}

type AllActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

const initialState: PropsType = {
    users: []
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
                users: [...state.users, ...action.users]
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
export const setUsersAC = (users: userPropsType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}