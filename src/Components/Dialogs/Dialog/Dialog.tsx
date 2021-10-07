import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Dialog.module.css'

type PropsType = {
    dialogName: string
    id: string
}

export function Dialog(props: PropsType) {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={classes.item} activeClassName={classes.active}>
            <div id={props.id}>{props.dialogName}</div>
        </NavLink>
    )
}