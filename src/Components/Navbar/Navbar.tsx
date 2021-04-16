import React from "react";
import classes from './Navbar.module.css'
import {NavbarItem} from "./NavbarItem/NavbarItem";
import {LinkItemsPropsType} from "../../index";

type NavbarPropsType = {
    navItem: Array<LinkItemsPropsType>
}

export function Navbar(props: NavbarPropsType) {
    const navItem = props.navItem
    const navItems = navItem.map(n => <NavbarItem link={n.link} title={n.title} />)
    return(
        <nav className={classes.nav}>
            {navItems}
        </nav>
    )
}

