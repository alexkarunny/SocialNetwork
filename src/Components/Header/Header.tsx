import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css';
import {AuthPropsType} from "../../redux/auth-reducer";

type PropsType = {
    authInfo: AuthPropsType
}

export function Header(props: PropsType) {
    return(
        <header className={classes.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX47gEOGCvxd42k4jH-Nv_-Yw2CfIjylnhVi4aV8Yr8TP3NrBOtzq7gnKVYeTBkYJXlEE&usqp=CAU"
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