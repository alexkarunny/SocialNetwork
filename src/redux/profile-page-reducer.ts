import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const ON_CHANGE_POST = 'ON_CHANGE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type PostsPropsType = {
    id: string
    message: string
    likes: number
}
type ContactsPropsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
type PhotosPropsType = {
    small: string
    large: string
}
export type ProfileInfoPropsType = {
    aboutMe: string
    contacts: ContactsPropsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosPropsType
}
type PropsType = {
    newPostMessage: string
    posts: PostsPropsType[]
    profileInfo: ProfileInfoPropsType | null
}

const initialState: PropsType = {
    newPostMessage: '',
    posts: [
        {id: v1(), message: 'Hi, how are you', likes: 10},
        {id: v1(), message: 'It\'s my first post', likes: 15},
        {id: v1(), message: 'It\'s my second post', likes: 5},
    ],
    profileInfo: null,
}

type AllActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof onChangePostAC>
    | ReturnType<typeof setUserProfile>

export const profilePageReducer = (state: PropsType = initialState, action: AllActionType) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostMessage: '',
                posts: [...state.posts, {id: v1(), message: state.newPostMessage, likes: 0}],
            };
        case ON_CHANGE_POST:
            return {
                ...state,
                newPostMessage: action.newPostText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        default:
            return state
    }
}
export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}

export const onChangePostAC = (newPostText: string) => {
    return {
        type: ON_CHANGE_POST,
        newPostText
    } as const
}

    export const setUserProfile = (profileInfo: ProfileInfoPropsType) => {
    return {
        type: SET_USER_PROFILE,
        profileInfo
    } as const
}

export const getUser = (userId: string) => {
  return (dispatch: Dispatch) => {
      usersAPI.getUser(userId)
          .then((data: any) => {
              dispatch(setUserProfile(data))
          })
  }
}