import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsPropsType} from "../../../redux/state";

type MyPostsPropsType = {
    post: Array<PostsPropsType>
    addPost: (postMessage: string) => void
}

export function MyPosts(props: MyPostsPropsType) {
    const post = props.post
    const postElements = post.map(p => <Post message={p.message} likes={p.likes}/>)

    let newPostRef = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {

        if (newPostRef.current) {
            props.addPost(newPostRef.current.value)
        }

    }

    return (
        <div className={classes.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostRef}></textarea></div>
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