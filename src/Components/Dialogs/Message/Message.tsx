import React from "react";
import classes from './Message.module.css'

type MessagePropsType = {
    messageText: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={classes.item}>{props.messageText}</div>
    )
}