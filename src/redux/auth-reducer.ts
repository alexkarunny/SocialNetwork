import {Dispatch} from "redux";
import {authApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

export type UserDataProps = {
    id: number | null
    email: string | null
    login: string | null
}

export type AuthPropsType = {
    userData: UserDataProps
    isAuth: boolean
}

const initialState: AuthPropsType = {
    userData: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false
}

type ActionTypes =
    | ReturnType<typeof setUserData>

export const authReducer = (state: AuthPropsType = initialState, action: ActionTypes): AuthPropsType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userData: {...state.userData, ...action.data},
                isAuth: true
            }
        default:
            return state
    }
}

export const setUserData = (data: UserDataProps) => {
    return {
        type: SET_USER_DATA,
        data
    } as const
}

export const getLogin = () => {
    return (dispatch: Dispatch) => {
        authApi.me()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(response.data.data))
                }
            })
    }
}