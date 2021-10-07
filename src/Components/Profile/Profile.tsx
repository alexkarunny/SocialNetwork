import React from "react";
import classes from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type PropsType = {
}

export function Profile(props: PropsType) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
