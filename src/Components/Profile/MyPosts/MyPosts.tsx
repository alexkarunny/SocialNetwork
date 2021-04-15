import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

type PostDataPropsType = {
    message: string
    likes: number
}

export function MyPosts() {

    const post: Array<PostDataPropsType> = [
        { message: 'Hi, how are you', likes: 10},
        { message: 'It\'s my first post', likes: 15},
        { message: 'It\'s my second post', likes: 5},
    ]

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