import React from "react";
import classes from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {NavLink} from "react-router-dom";


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

    let dialogsData: Array<DialogsDataPropsData> = [
        {id: '1', name: 'Alex'},
        {id: '2', name: 'Alexei'}
    ]

    let messagesData: Array<MessagesDataPropsType> = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'I\'m fine. just not happy'}
    ]

    return (
        <div className={classes.title}>
            <div className={classes.dialogs}>
                <h3>{props.titleDialog}</h3>
                <Dialog dialogName={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog dialogName={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={classes.messages}>
                <h3>{props.titleMessage}</h3>
                <Message messageText={messagesData[0].message}/>
                <Message messageText={messagesData[1].message}/>
            </div>
        </div>
    )
}