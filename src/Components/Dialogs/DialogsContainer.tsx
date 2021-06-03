import React from "react";
import {ActionTypes, DialogPropsType, MessagesPropsType} from "../../redux/state";
import {addNewMessageAC, addNewMessagePostAC} from "../../redux/dialogs-page-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


/*type DialogsContainerPropsType = {
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
        <Dialogsret titleDialog={props.titleDialog}
                 titleMessage={props.titleMessage}
                 addMessagePost={addMessagePost}
                 addMessageText={addMessageText}
                 dialogs={props.dialogs}
                 messages={props.messages}
                 newMessage={props.newMessage}
        />
    )
}*/

export type MapStateToPropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagesPropsType>
    newMessage: string

}
export type MapDispatchToPropsType = {
    addMessageText: (text: string) => void
    addMessagePost: () => void

}
export type OwnPropsType = {
    titleDialog: string,
    titleMessage: string
}
export type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,

    }

}
const mapDispatchToProps = (dispatch: (action: ActionTypes) => void, state: AppStateType): MapDispatchToPropsType => {
    return {
        addMessageText: (text: string) => {
            dispatch(addNewMessageAC(text))
        },
        addMessagePost: () => {
            if (state.dialogsPage.newMessage) {
                dispatch(addNewMessagePostAC(state.dialogsPage.newMessage))
            }

        }
    }
}
const ownProps = () :OwnPropsType => {
    return {
        titleDialog: 'Dialogs',
        titleMessage: 'Messages',
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps, ownProps)(Dialogs)