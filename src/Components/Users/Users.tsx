import React from "react";
import {userPropsType} from "../../redux/users-page-reducer";
import style from "./Users.module.css"
import axios from "axios";
import ava from '../../assets/images/ava.png'

type PropsType = {
    users: userPropsType[]
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: userPropsType[]) => void
}

export class Users extends React.Component<PropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users', {
                withCredentials: true,
                headers: {
                    "API-KEY": "88c27098-d58c-439b-a5fb-d6a202fce25b"
                }
            })
                .then((resp: any) => {
                    this.props.setUsers(resp.data.items)
                })
        }
    }

    render() {
        return <div>
            {
                this.props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small !== null ? user.photos.small : ava} className={style.photoUser}
                             alt='img'/>
                    </div>
                    <div>
                        {(user.followed)
                            ? <button onClick={() => this.props.unfollow(user.id)}>Follow</button>
                            : <button onClick={() => this.props.follow(user.id)}>Unfollow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{user.name}</div>
                    </span>
                    <span>
                        <div>{user.status}</div>
                     </span>
                </span>
                </div>)
            }
        </div>
    }
}
