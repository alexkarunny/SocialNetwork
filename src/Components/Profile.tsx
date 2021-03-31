import React from "react";
import classes from './Profile.module.css'

export function Profile() {
    return(
        <div className={classes.content}>
            <div>
                <img src="https://static8.depositphotos.com/1370441/848/i/600/depositphotos_8486144-stock-photo-beach-and-tropical-sea.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    new posts
                </div>
                <div className='posts'>
                    <div className={classes.item}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post 2
                    </div>
                </div>
            </div>

        </div>
    )
}