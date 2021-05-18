import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogPropsType, MessagesPropsType} from "../../redux/state";


type DialogsPropsType = {
    titleDialog: string
    titleMessage: string
    dialogs: Array<DialogPropsType>
    messages: Array<MessagesPropsType>
    newMessage: string
    addMessagePost: () => void
    addMessageText: (text: string) => void
}

export function Dialogs(props: DialogsPropsType) {

    const dialogs = props.dialogs
    const messages = props.messages

    const dialogsElements = dialogs.map(d => <Dialog dialogName={d.name} id={d.id}/>)
    const messagesElements = messages.map(m => <Message messageText={m.message}/>)

    const addMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.addMessageText(e.currentTarget.value)
    }

    const addMessagePost = () => {
        props.addMessagePost()

    }


    return (
        <div className={classes.title}>
            <div className={classes.dialogs}>
                <h3>{props.titleDialog}</h3>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <h3>{props.titleMessage}</h3>
                {messagesElements}
                <textarea value={props.newMessage}
                          onChange={addMessageText}
                />
                <button onClick={addMessagePost}>send</button>
            </div>
        </div>
    )
}