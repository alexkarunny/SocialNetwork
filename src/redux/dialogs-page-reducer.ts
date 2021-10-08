import {v1} from "uuid";

const ON_CHANGE_MESSAGE = 'ON_CHANGE_MESSAGE'
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'

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
        type: ON_CHANGE_MESSAGE,
        newMessageText
    } as const
}
export const addNewMessageAC = () => {
    return {
        type: ADD_NEW_MESSAGE,
    } as const
}

type AllActionTypes =
    | ReturnType<typeof onChangeMessageAC>
    | ReturnType<typeof addNewMessageAC>

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
        case ON_CHANGE_MESSAGE:
            return {
                ...state,
                newMessage: action.newMessageText
            };
        case ADD_NEW_MESSAGE:
            return {
                ...state,
                newMessage: '',
                messages: [...state.messages, {id: v1(), message: state.newMessage}]
            };
        default:
            return state
    }
}