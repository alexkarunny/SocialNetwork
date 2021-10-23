import React from "react";
import classes from './ProfileInfo.module.css'
import {ProfileInfoPropsType} from "../../../redux/profile-page-reducer";
import ava from '../../../assets/images/ava.png'
import {Preloader} from "../../common/Preloader/Preloader";

type PropsType = {
    profileInfo: ProfileInfoPropsType | null
}

export function ProfileInfo(props: PropsType) {
    if (!props.profileInfo) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src={props.profileInfo.photos.large
                        ? props.profileInfo.photos.large
                        : ava}
                    alt="Cat"/>
            </div>
            <div className={classes.profileInfoTitle}>
                <h2>{props.profileInfo.fullName}</h2>
            </div>
        </div>
    )
}