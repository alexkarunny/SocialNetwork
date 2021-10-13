import React from "react";
import {usersPropsType} from "../../redux/users-page-reducer";
import style from "./Users.module.css"
import {v1} from "uuid";

type PropsType = {
    users: usersPropsType[]
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: usersPropsType[]) => void
}

export function Users(props: PropsType) {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: v1(),
                    followed: false,
                    fullName: 'Alexander',
                    status: 'junior',
                    location: {city: 'Minsk', country: 'Belarus'},
                    photoUrl: 'https://parfumclub.org/images/celebrities/alexander-skarsgard.jpg'
                },
                {
                    id: v1(),
                    followed: true,
                    fullName: 'Anatoly',
                    status: 'middle',
                    location: {city: 'Lvov', country: 'Ukraine'},
                    photoUrl: 'https://stuki-druki.com/aforizms/Anatole%20France01.jpg'
                },
                {
                    id: v1(),
                    followed: false,
                    fullName: 'Petr',
                    status: 'senior',
                    location: {city: 'Vilnius', country: 'Lithuania'},
                    photoUrl: 'https://biographe.ru/wp-content/uploads/2018/01/5-11-350x350.jpg'
                },
            ]
        )
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