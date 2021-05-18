import React from "react";
import {ActionTypes, DialogPropsType, MessagesPropsType} from "../../redux/state";
import {addNewMessageAC, addNewMessagePostAC} from "../../redux/dialogs-page-reducer";
import {Dialogs} from "./Dialogs";


type DialogsContainerPropsType = {
    titleDialog: string
    titleMessage: string
    dialogs: Array<DialogPropsType>
    messages: Array<MessagesPropsType>
    newMessage: string
    dispatch: (action: ActionTypes) => void
}

export function DialogsContainer(props: DialogsContainerPropsType) {

    const addMessageText = (text: string) => {
        props.dispatch(addNewMessageAC(text))
    }

    const addMessagePost = () => {
        if (props.newMessage) {
            props.dispatch(addNewMessagePostAC(props.newMessage))
        }

    }

    return (
        <Dialogs titleDialog={props.titleDialog} addMessagePost={addMessagePost} addMessageText={addMessageText}
                 dialogs={props.dialogs} messages={props.messages} newMessage={props.newMessage}
                 titleMessage={props.titleMessage}/>
    )
}