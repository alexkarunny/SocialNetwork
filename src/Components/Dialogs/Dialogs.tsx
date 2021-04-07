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
                <NavLink to={'/dialogs/1'}><Dialog dialogName={'Alex'}/></NavLink>
                <NavLink to={'/dialogs/2'}><Dialog dialogName={'Sveta'}/></NavLink>
                <NavLink to={'/dialogs/3'}><Dialog dialogName={'Alexei'}/></NavLink>
                <NavLink to={'/dialogs/4'}><Dialog dialogName={'Nikita'}/></NavLink>
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