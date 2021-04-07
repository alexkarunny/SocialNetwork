import React from "react";
import classes from './News.module.css'

type NewsPropsType = {
    title: string
}

export function News(props: NewsPropsType) {
    return (
        <div className={classes.title}>
            {props.title}
        </div>
    )
}