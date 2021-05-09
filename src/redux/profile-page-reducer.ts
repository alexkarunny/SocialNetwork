import {v1} from "uuid";
import {ActionTypes, PostsPropsType, ProfilePagePropsType} from "./state";

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

export const profilePageReducer = (state: ProfilePagePropsType, action: ActionTypes) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsPropsType = {id: v1(), message: action.postMessage, likes: 0}
            state.posts.push(newPost)
            state.newPostMessage = ''
            return state;
        case ADD_NEW_POST_MESSAGE:
            state.newPostMessage = action.newPostText
            return state;
        default:
            return state
    }
}