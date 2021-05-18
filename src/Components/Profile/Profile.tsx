import React from "react";
import classes from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostsPropsType} from "../../redux/state";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    posts: Array<PostsPropsType>
    dispatch: (action: ActionTypes) => void
    newPostMessage: string
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer post={props.posts}
                              dispatch={props.dispatch}
                              newPostMessage={props.newPostMessage}
            />
        </div>
    )
}
