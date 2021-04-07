import React from "react";
import classes from './Music.module.css'

type MusicPropsType = {
    title: string
}

export function Music(props: MusicPropsType) {
    return (
        <div className={classes.title}>
            {props.title}
        </div>
    )
}