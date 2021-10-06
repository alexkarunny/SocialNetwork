import {v1} from "uuid";
import {PostsPropsType, ProfilePagePropsType} from "./state";

const ADD_POST = 'ADD_POST';
const ADD_NEW_POST_MESSAGE = 'ADD_NEW_POST_MESSAGE';


export const addPostAC = (postMessage: string) => {
    return {
        type: ADD_POST,
        postMessage: postMessage
    } as const
}

export const addNewPostMessageAC = (newPostText: string) => {
    return {
        type: ADD_NEW_POST_MESSAGE,
        newPostText: newPostText
    } as const
}

const initialState: ProfilePagePropsType = {
    newPostMessage: '',
    posts: [
        {id: v1(), message: 'Hi, how are you', likes: 10},
        {id: v1(), message: 'It\'s my first post', likes: 15},
        {id: v1(), message: 'It\'s my second post', likes: 5},
    ]
}

type AllActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addNewPostMessageAC>

export const profilePageReducer = (state: ProfilePagePropsType = initialState, action: AllActionType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsPropsType = {id: v1(), message: action.postMessage, likes: 0}
            state.posts.push(newPost)
            state.newPostMessage = ''
            return {...state};
        case ADD_NEW_POST_MESSAGE:
            state.newPostMessage = action.newPostText
            return {...state};
        default:
            return state
    }
}