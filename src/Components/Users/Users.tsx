import React from "react";
import {usersPropsType} from "../../redux/users-page-reducer";
import style from "./Users.module.css"
import {v1} from "uuid";
import axios from "axios";



type PropsType = {
    users: usersPropsType[]
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: usersPropsType[]) => void
}

export function Users(props: PropsType) {
    if (props.users.length === 0) {
       axios.get('https://social-network.samuraijs.com/api/1.0/users', {
           withCredentials: true,
           headers:     {
               "API-KEY": "88c27098-d58c-439b-a5fb-d6a202fce25b"
           }
       })
           .then(response => {
               debugger;
               props.setUsers(response.data.users)
           })
    }
    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={style.photoUser}/>
                    </div>
                    <div>
                        {(user.followed)
                            ? <button onClick={() => props.unfollow(user.id)}>Follow</button>
                            : <button onClick={() => props.follow(user.id)}>Unfollow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                     </span>
                </span>
            </div>)
        }
    </div>
}