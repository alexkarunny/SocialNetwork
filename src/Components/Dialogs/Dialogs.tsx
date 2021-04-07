import React from "react";
import classes from './Dialogs.module.css'


type DialogsPropsType = {
    title: string
}

export function Dialogs(props: DialogsPropsType) {
    return (
        <div className={classes.title}>
            {props.title}
        </div>
    )
}