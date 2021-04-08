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
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYApQrtzptMwxHXCL7AspUYmbkh8Lx75-4g&usqp=CAU'
                alt={'sdf'}/>
            {props.message}
            <div>
                <span>{props.likes} Likes</span>
            </div>
        </div>

    )
}