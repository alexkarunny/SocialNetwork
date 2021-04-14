import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

type PostDataPropsType = {
    id: number
    message: string
    likes: number
}

export function MyPosts() {

    let postData: Array<PostDataPropsType> = [
        {id: 1, message: 'Hi, how are you', likes: 10},
        {id: 2, message: 'It\'s my first post', likes: 15},
    ]

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
                <Post message={postData[0].message} likes={postData[0].likes}/>
                <Post message={postData[1].message} likes={postData[1].likes}/>
            </div>
        </div>
    )
}