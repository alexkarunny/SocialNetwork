import React from "react";
import classes from './NavbarItem.module.css'


type NavbarItemPropsType = {
    title: string
    link: string
}

export function NavbarItem(props: NavbarItemPropsType) {
    return (
        <div className={`${classes.item} ${classes.active}`}>
            <a href={props.link}>{props.title}</a>
        </div>

    )
}