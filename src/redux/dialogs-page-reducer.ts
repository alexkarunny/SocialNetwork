import {v1} from "uuid";

const ON_CHANGE_MESSAGE_POST = 'ON_CHANGE_MESSAGE_POST'
const ADD_NEW_MESSAGE_POST = 'ADD_NEW_MESSAGE_POST'

export type DialogPropsType = {
    id: string
    name: string
}
export type MessagesPropsType = {
    id: string
    message: string
}
type PropsType = {
    newMessage: string
    messages: MessagesPropsType[]
    dialogs: DialogPropsType[]
}

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

type AllActionTypes =
    | ReturnType<typeof onChangeMessageAC>
    | ReturnType<typeof addNewMessagePostAC>

const initialState: PropsType = {
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

export const dialogsPageReducer = (state: PropsType = initialState, action: AllActionTypes) => {
    switch (action.type) {
        case ON_CHANGE_MESSAGE_POST:
            state.newMessage = action.newMessageText
            return {...state};
        case ADD_NEW_MESSAGE_POST:
            const newMessage: MessagesPropsType = {id: v1(), message: state.newMessage}
            state.messages.push(newMessage)
            state.newMessage = ''
            return {...state};
        default:
            return state
    }
}