import {
    addNewMessageAC,
    DialogPropsType,
    MessagesPropsType,
    onChangeMessageAC
} from "../../redux/dialogs-page-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnProps

type OwnProps = {
    titleDialog: string
    titleMessage: string
}

type MapStateToPropsType = {
    dialogs: DialogPropsType[]
    messages: MessagesPropsType[]
    newMessage: string
    isAuth: boolean
}

type MapDispatchToPropsType = {
    addNewMessagePost: () => void
    onChangeMessage: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addNewMessagePost: () => {
            dispatch(addNewMessageAC())
        },
        onChangeMessage: (text: string) => dispatch(onChangeMessageAC(text))
    }
}

export const DialogsContainer = withAuthRedirect(connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps
)(Dialogs))