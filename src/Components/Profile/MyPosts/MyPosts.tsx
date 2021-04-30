import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsPropsType} from "../../../redux/state";

type MyPostsPropsType = {
    post: Array<PostsPropsType>
    addPost: (postMessage: string) => void
    addNewPostMessage: (newPostText: string) => void
    newPostMessage: string
}

export function MyPosts(props: MyPostsPropsType) {
    const post = props.post
    const postElements = post.map(p => <Post message={p.message} likes={p.likes}/>)

    const addPost = () => {
        if (props.newPostMessage) {
            props.addPost(props.newPostMessage)
        }
    }

    const addNewPostMessageOnChange = ((e: ChangeEvent<HTMLTextAreaElement>) => {
        props.addNewPostMessage(e.currentTarget.value)
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