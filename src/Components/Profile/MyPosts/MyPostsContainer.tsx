import React from "react";
import {PostsPropsType} from "../../../redux/state";
import {addNewPostMessageAC, addPostAC} from "../../../redux/profile-page-reducer";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";

type MyPostsContainerPropsType = {
    post: Array<PostsPropsType>
    dispatch: (action: any) => void
    newPostMessage: string
}

export function MyPostsContainer(props: MyPostsContainerPropsType) {

    const addPost = () => {
        if (props.newPostMessage) {
            props.dispatch(addPostAC(props.newPostMessage))
        }
    }

    const addNewPostMessageOnChange = (text: string) => {
        props.dispatch(addNewPostMessageAC(text))
    }

    return (
        <MyPosts addNewPostMessageOnChange={addNewPostMessageOnChange} newPostMessage={props.newPostMessage}
                 post={props.post} addPost={addPost}/>
    )
}