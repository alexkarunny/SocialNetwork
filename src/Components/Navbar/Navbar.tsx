import React from "react";
import classes from './Navbar.module.css'
import {NavbarItem} from "./NavbarItem/NavbarItem";
import {LinkItemsPropsType} from "../../redux/navbar-page-reducer";


type NavbarPropsType = {
    navItem: LinkItemsPropsType[]
}

export function Navbar(props: NavbarPropsType) {
    const navItem = props.navItem
    const navItems = navItem.map((navItem, index) => <NavbarItem key={index} link={navItem.link} title={navItem.title} />)
    return(
        <nav className={classes.nav}>
            {navItems}
        </nav>
    )
}

