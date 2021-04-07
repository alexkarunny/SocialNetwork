import React from "react";
import classes from './Dialog.module.css'

type DialogPropsType = {
    dialogName: string
}

export function Dialog(props: DialogPropsType) {
    return (
        <div>{props.dialogName}</div>
    )
}