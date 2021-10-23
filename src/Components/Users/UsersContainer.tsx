import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    PagePropsType,
    setPageAC,
    setTotalUsersAC,
    setUsersAC,
    unfollowAC,
    UserPropsType
} from "../../redux/users-page-reducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";

type PropsType = {
    users: UserPropsType[]
    page: PagePropsType
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserPropsType[]) => void
    setPage: (currentPage: number) => void
    setTotalUsers: (totalUsers: number) => void
}

export class UsersContainerAPI extends React.Component<PropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page.currentPage}&count=${this.props.page.pageSize}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "88c27098-d58c-439b-a5fb-d6a202fce25b"
                }
            })
                .then((resp: any) => {
                    this.props.setUsers(resp.data.items)
                    this.props.setTotalUsers(resp.data.totalCount)
                })
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.page.pageSize}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "88c27098-d58c-439b-a5fb-d6a202fce25b"
            }
        })
            .then((resp: any) => {
                this.props.setUsers(resp.data.items)
            })
    }

    render() {
        return (
            <Users users={this.props.users}
                   page={this.props.page}
                   setPage={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        )
    }
}


type MapStatePropsType = {
    users: UserPropsType[],
    page: PagePropsType
}

type MapDispatchPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserPropsType[]) => void
    setPage: (currentPage: number) => void
    setTotalUsers: (totalUsers: number) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID) => dispatch(followAC(userID)),
        unfollow: (userID) => dispatch(unfollowAC(userID)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setPage: (currentPage) => dispatch(setPageAC(currentPage)),
        setTotalUsers: (totalUsers: number) => dispatch(setTotalUsersAC(totalUsers))
    }
}

export const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)