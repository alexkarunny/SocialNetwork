import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionTypes, PostsPropsType} from "../../../redux/state";

type MyPostsPropsType = {
    post: Array<PostsPropsType>
    dispatch: (action: ActionTypes) => void
    newPostMessage: string
}

export function MyPosts(props: MyPostsPropsType) {
    const post = props.post
    const postElements = post.map(p => <Post message={p.message} likes={p.likes}/>)

    const addPost = () => {
        if (props.newPostMessage) {
            props.dispatch({type: "ADD-POST", postMessage: props.newPostMessage })
        }
    }

    const addNewPostMessageOnChange = ((e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "ADD-NEW-POST-MESSAGE", newPostText: (e.currentTarget.value) })
    })

    return (
        <div className={classes.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostMessage}
                              onChange={addNewPostMessageOnChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}