import React from "react";
import classes from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";


type DialogsPropsType = {
    titleDialog: string
    titleMessage: string
}

export function Dialogs(props: DialogsPropsType) {
    return (
        <div className={classes.title}>
            <div className={classes.dialogs}>
                <h3>{props.titleDialog}</h3>
                <Dialog dialogName={'Alex'}/>
                <Dialog dialogName={'Sveta'}/>
                <Dialog dialogName={'Alexei'}/>
                <Dialog dialogName={'Nikita'}/>
            </div>
            <div className={classes.messages}>
                <h3>{props.titleMessage}</h3>
                <Message messageText={'Hello'}/>
                <Message messageText={'How are you'}/>
                <Message messageText={'I\'m fine. just not happy'}/>
            </div>
        </div>
    )
}