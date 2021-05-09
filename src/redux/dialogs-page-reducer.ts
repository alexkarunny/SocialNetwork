import {ActionTypes, DialogsPagePropsType, MessagesPropsType} from "./state";
import {v1} from "uuid";

const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
const ADD_NEW_MESSAGE_POST = 'ADD_NEW_MESSAGE_POST'


export const addNewMessageAC = (newMessageText: string) => {
    return {
        type: ADD_NEW_MESSAGE,
        newMessageText: newMessageText
    } as const
}
export const addNewMessagePostAC = (newMessagePost: string) => {
    return {
        type: ADD_NEW_MESSAGE_POST,
        newMessagePost: newMessagePost
    } as const
}

export const dialogsPageReducer = (state: DialogsPagePropsType, action: ActionTypes) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            state.newMessage = action.newMessageText
            return state;
        case ADD_NEW_MESSAGE_POST:
            const newMessage: MessagesPropsType = {id: v1(), message: action.newMessagePost}
            state.messages.push(newMessage)
            state.newMessage = ''
            return state;
        default:
            return state
    }
}