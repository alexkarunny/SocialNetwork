import React from "react";
import classes from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfoPropsType} from "../../redux/profile-page-reducer";

type PropsType = {
    profileInfo: ProfileInfoPropsType | null
}

export function Profile(props: PropsType) {
    return (
        <div className={classes.content}>
            <ProfileInfo profileInfo={props.profileInfo}/>
            <MyPostsContainer/>
        </div>
    )
}
