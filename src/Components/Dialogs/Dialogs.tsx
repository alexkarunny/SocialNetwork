import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogPropsType, MessagesPropsType} from "../../redux/dialogs-page-reducer";

type PropsType = {
    titleDialog: string
    titleMessage: string
    dialogs: DialogPropsType[]
    messages: MessagesPropsType[]
    newMessage: string
    addNewMessagePost: () => void
    onChangeMessage: (text: string) => void
}

export function Dialogs(props: PropsType) {
    const dialogs = props.dialogs
    const messages = props.messages

    const dialogsElements = dialogs.map(dialog => <Dialog key={dialog.id} dialogName={dialog.name} id={dialog.id}/>)
    const messagesElements = messages.map(message => <Message key={message.id} messageText={message.message}/>)

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessage(e.currentTarget.value)
    }

    const addMessagePost = () => {
        props.addNewMessagePost()
    }

    return (
        <div className={classes.title}>
            <div className={classes.dialogs}>
                <h3>{props.titleDialog || 'Dialogs'}</h3>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <h3>{props.titleMessage || 'Messages'}</h3>
                {messagesElements}
                <textarea
                    value={props.newMessage}
                    onChange={onChange}
                />
                <button onClick={addMessagePost}>send</button>
            </div>
        </div>
    )
}