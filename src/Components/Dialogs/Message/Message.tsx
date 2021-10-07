import React from "react";
import classes from './Message.module.css'

type PropsType = {
    messageText: string
}

export function Message(props: PropsType) {
    return (
        <div className={classes.item}>{props.messageText}</div>
    )
}