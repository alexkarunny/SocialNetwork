import {v1} from "uuid";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

type locationType = {
    city: string
    country: string
}
type usersPropsType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: locationType
}
type PropsType = {
    users: usersPropsType[]
}

type AllActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

const initialState: PropsType = {
    users: [
        /*{id: v1(), followed: false, fullName: 'Alex', status: 'junior', location: {city: 'Minsk', country: 'Belarus'}},
        {id: v1(), followed: false, fullName: 'Anatol', status: 'middle', location: {city: 'Lvov', country: 'Ukraine'}},
        {id: v1(), followed: false, fullName: 'Petr', status: 'senior', location: {city: 'Vilnius', country: 'Lithuania'}},*/
    ]
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
export const setUsersAC = (users: usersPropsType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}