import React from "react";
import classes from './Post.module.css';

type PostPropsType = {
    message: string
    likes: number
}

export function Post(props: PostPropsType) {
    return (
        <div className={classes.item}>
            <img
                src="https://lh3.googleusercontent.com/proxy/pB9DYxguByIe0j8ZpM9crKQgHjGp-0KGAZkO79YCHAokTagFrOfV36Aqpg1eVLudC-wF3K3cNnG0KcHUOct-0t5lzeJjDEpkwqfqA0Dm6iFrgsKbBTCvQV-ARj2mCHSjjFuYsw"/>
            {props.message}
            <div>
                <span>{props.likes} Likes</span>
            </div>
        </div>

    )
}