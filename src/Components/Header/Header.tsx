import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css';
import {AuthPropsType} from "../../redux/auth-reducer";
import logo from '../../assets/images/logo.png'

type PropsType = {
    authInfo: AuthPropsType
}

export function Header(props: PropsType) {
    return(
        <header className={classes.header}>
            <img
                src={logo}
                alt=""/>
            <div className={classes.loginBlock}>
                {
                    props.authInfo.isAuth
                    ? props.authInfo.userData.login
                    : <NavLink to={'/login'} className={classes.loginLink}>Login</NavLink>
                }
            </div>
        </header>
    )
}