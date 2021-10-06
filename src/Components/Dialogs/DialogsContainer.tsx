import React from "react";
import {DialogPropsType, MessagesPropsType} from "../../redux/state";
import {addNewMessagePostAC, onChangeMessageAC} from "../../redux/dialogs-page-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

export type MapStateToPropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagesPropsType>
    newMessage: string
}
export type MapDispatchToPropsType = {
    addNewMessagePost: () => void
    onChangeMessage: (text: string) => void
}

// type PropsComponentType = {
//     titleDialog: string
//     titleMessage: string
// }
//
// export type PropsType = MapStateToPropsType & MapDispatchToPropsType & PropsComponentType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addNewMessagePost: () => {
            dispatch(addNewMessagePostAC())
        },
        onChangeMessage: (text: string) => dispatch(onChangeMessageAC(text))
    }
}

export const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps
)(Dialogs)