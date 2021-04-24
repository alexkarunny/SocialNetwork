import React from "react";
import classes from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogPropsType, MessagesPropsType} from "../../redux/state";


type DialogsPropsType = {
    titleDialog: string
    titleMessage: string
    dialogs: Array<DialogPropsType>
    messages: Array<MessagesPropsType>
}

export function Dialogs(props: DialogsPropsType) {

    const dialogs = props.dialogs
    const messages = props.messages

    const dialogsElements = dialogs.map( d => <Dialog dialogName={d.name} id={d.id}/>)
    const messagesElements =  messages.map( m => <Message messageText={m.message}/>)

    let newMessage = React.createRef<HTMLTextAreaElement>()
    const newMessages = () => {
        alert(newMessage.current?.value)
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
                <textarea ref={newMessage}></textarea>
                <button onClick={newMessages}>send</button>
            </div>
        </div>
    )
}