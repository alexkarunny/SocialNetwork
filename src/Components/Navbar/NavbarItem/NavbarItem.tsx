import React from "react";
import {NavLink} from "react-router-dom";
import classes from './NavbarItem.module.css'


type PropsType = {
    title: string
    link: string
}

export function NavbarItem(props: PropsType) {
    return (
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to={props.link} activeClassName={classes.activeLink}>{props.title}</NavLink>
        </div>

    )
}