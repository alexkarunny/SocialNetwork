import React from "react";
import classes from './Navbar.module.css'
import {NavbarItem} from "./NavbarItem/NavbarItem";

export function Navbar() {
    return(
        <nav className={classes.nav}>
            <NavbarItem title={'Profile'} link={'/profile'} />
            <NavbarItem title={'Dialog'} link={'/dialogs'} />
            <NavbarItem title={'News'} link={'/news'} />
            <NavbarItem title={'Music'} link={'/music'} />
            <NavbarItem title={'Settings'} link={'/settings'} />
        </nav>
    )
}

