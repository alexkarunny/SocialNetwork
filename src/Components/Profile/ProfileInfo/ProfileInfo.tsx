import React from "react";
import classes from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src="https://static8.depositphotos.com/1370441/848/i/600/depositphotos_8486144-stock-photo-beach-and-tropical-sea.jpg"
                    alt="Cat"/>
            </div>
            <div className={classes.profileInfoTitle}>
                <h2>Journal</h2>
            </div>
        </div>
    )
}