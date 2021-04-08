import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export function MyPosts() {
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
                <Post message={"Hi, how are you"} likes={10}/>
                <Post message={"It's my first post"} likes={15}/>
            </div>
        </div>
    )
}