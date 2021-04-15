import React from "react";
import classes from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";



type DialogsPropsType = {
    titleDialog: string
    titleMessage: string
}

type DialogsDataPropsData = {
    id: string
    name: string
}

type MessagesDataPropsType = {
    id: number
    message: string
}

export function Dialogs(props: DialogsPropsType) {

    const dialogs: Array<DialogsDataPropsData> = [
        {id: '1', name: 'Alex'},
        {id: '2', name: 'Alexei'},
        {id: '3', name: 'Ivan'},
        {id: '4', name: 'Katya'}
    ]

    const messages: Array<MessagesDataPropsType> = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'I\'m fine. just not happy'},
        {id: 3, message: 'I\'m fine.'}
    ]

    const dialogsElements = dialogs.map( d => <Dialog dialogName={d.name} id={d.id}/>)
    const messagesElements =  messages.map( m => <Message messageText={m.message}/>)

    return (
        <div className={classes.title}>
            <div className={classes.dialogs}>
                <h3>{props.titleDialog}</h3>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <h3>{props.titleMessage}</h3>
                {messagesElements}
            </div>
        </div>
    )
}