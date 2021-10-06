import {DialogsPagePropsType, MessagesPropsType} from "./state";
import {v1} from "uuid";

const ON_CHANGE_MESSAGE_POST = 'ON_CHANGE_MESSAGE_POST'
const ADD_NEW_MESSAGE_POST = 'ADD_NEW_MESSAGE_POST'


export const onChangeMessageAC = (newMessageText: string) => {
    return {
        type: ON_CHANGE_MESSAGE_POST,
        newMessageText
    } as const
}
export const addNewMessagePostAC = () => {
    return {
        type: ADD_NEW_MESSAGE_POST,
    } as const
}

const initialState: DialogsPagePropsType = {
    newMessage: '',
    messages: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'I\'m fine. just not happy'},
        {id: v1(), message: 'I\'m fine.'}
    ],
    dialogs: [
        {id: '1', name: 'Alex'},
        {id: '2', name: 'Alexei'},
        {id: '3', name: 'Ivan'},
        {id: '4', name: 'Katya'},
        {id: '5', name: 'Jenya'},
        {id: '6', name: 'Andrew'},

    ]
}

type AllActionTypes =
    | ReturnType<typeof onChangeMessageAC>
    | ReturnType<typeof addNewMessagePostAC>

export const dialogsPageReducer = (state: DialogsPagePropsType = initialState, action: AllActionTypes) => {
    switch (action.type) {
        case ON_CHANGE_MESSAGE_POST:
            state.newMessage = action.newMessageText

            return {...state};
        case ADD_NEW_MESSAGE_POST:
            const newMessage: MessagesPropsType = {id: v1(), message: state.newMessage}

            state.newMessage = ''
            state.messages.push(newMessage)

            return {...state};
        default:
            return state
    }
}