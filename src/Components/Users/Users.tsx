import React from "react";
import {PagePropsType, UserPropsType} from "../../redux/users-page-reducer";
import style from "./Users.module.css";
import ava from '../../assets/images/ava.png';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type PropsType = {
    users: UserPropsType[]
    page: PagePropsType
    followingInProgress: string[]
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userID: string) => void
}

export function Users(props: PropsType) {

    let userAmountPage = Math.ceil(props.page.totalUsers / props.page.pageSize)
    let pages: number[] = [];
    for (let i = 1; i <= userAmountPage; i++) {
        pages.push(i)
    }
    const onPageChanged = (pageNumber: number) => {
        props.setPage(pageNumber)
    }

    return <div>
        {
            pages.map((page, index) => {
                return <span key={`${index}-${page} `}
                             className={`${page === props.page.currentPage ? style.currentPage : ''} ${style.page}`}
                             onClick={() => {
                                 onPageChanged(page)
                             }}
                >{page}</span>
            })
        }
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small !== null ? user.photos.small : ava}
                                 className={style.photoUser}
                                 alt='img'/>
                        </NavLink>
                    </div>
                    <div>
                        {(user.followed)
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.toggleFollowingProgress(true, user.id)
                                usersAPI.unfollowUser(user.id)
                                    .then((data: any) => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(user.id)
                                        }
                                        props.toggleFollowingProgress(false, user.id)
                                    })

                            }
                            }>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.toggleFollowingProgress(true, user.id)
                                usersAPI.followUser(user.id)
                                    .then((data: any) => {
                                        if (data.resultCode === 0) {
                                            props.follow(user.id)
                                        }
                                        props.toggleFollowingProgress(false, user.id)
                                    })
                            }
                            }>Follow</button>
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


