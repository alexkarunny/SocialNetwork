import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsPropsType} from "../../../redux/profile-page-reducer";

type PropsType = {
    posts: PostsPropsType[]
    onChangePost: (text: string) => void
    newPost: string
    addPost: () => void
}

export function MyPosts(props: PropsType) {
    const post = props.posts
    const postElements = post.map((post, index) => <Post key={index} message={post.message} likes={post.likes}/>)

    const addPost = () => {
        props.addPost()
    }

    const OnChange = ((e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangePost(e.currentTarget.value)
    })

    return (
        <div className={classes.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPost}
                              onChange={OnChange}/>
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