import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Dialog.module.css'

type DialogPropsType = {
    dialogName: string
    id: string
}

export function Dialog(props: DialogPropsType) {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={classes.item} activeClassName={classes.active}>
            <div id={props.id}>{props.dialogName}</div>
        </NavLink>
    )
}