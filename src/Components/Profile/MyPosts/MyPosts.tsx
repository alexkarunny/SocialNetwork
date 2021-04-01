import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div>
            My posts
            <div>
                new posts
            </div>
            <div className={classes.posts}>
                <Post/>
                <Post/>
                <Post/>

            </div>
        </div>
    )
}