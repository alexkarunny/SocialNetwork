import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsPropsType} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostsPropsType>
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts post={props.posts}/>
        </div>
    )}
