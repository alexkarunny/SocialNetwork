import React from "react";
import classes from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {NavLink} from "react-router-dom";


type DialogsPropsType = {
    titleDialog: string
    titleMessage: string
}

export function Dialogs(props: DialogsPropsType) {
    return (
        <div className={classes.title}>
            <div className={classes.dialogs}>
                <h3>{props.titleDialog}</h3>
                <Dialog dialogName={'Alex'} id={'1'}/>
                <Dialog dialogName={'Sveta'} id={'2'}/>
                <Dialog dialogName={'Alexei'} id={'3'}/>
                <Dialog dialogName={'Viktor'} id={'4'}/>

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