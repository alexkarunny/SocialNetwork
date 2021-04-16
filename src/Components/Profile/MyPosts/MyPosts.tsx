import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsPropsType} from "../../../index";

type MyPostsPropsType = {
    post: Array<PostsPropsType>
}

export function MyPosts(props: MyPostsPropsType) {
    const post = props.post
    const postElements = post.map(p => <Post message={p.message} likes={p.likes}/>)

    return (
        <div className={classes.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>

                {postElements}
            </div>
        </div>
    )
}