import React from "react";
import classes from './Settings.module.css'

type SettingsPropsType = {
    title: string
}

export function Settings(props: SettingsPropsType) {
    return (
        <div className={classes.title}>
            {props.title}
        </div>
    )
}
