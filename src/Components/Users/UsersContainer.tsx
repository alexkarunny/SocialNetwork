import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    PagePropsType,
    setPageAC,
    setTotalUsersAC,
    setUsersAC, toggleIsFetching,
    unfollowAC,
    UserPropsType
} from "../../redux/users-page-reducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import {Preloader} from "../common/Preloader/Preloader";

type PropsType = {
    users: UserPropsType[]
    page: PagePropsType
    isFetching: boolean
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserPropsType[]) => void
    setPage: (currentPage: number) => void
    setTotalUsers: (totalUsers: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export class UsersContainerAPI extends React.Component<PropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page.currentPage}&count=${this.props.page.pageSize}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "88c27098-d58c-439b-a5fb-d6a202fce25b"
                }
            })
                .then((resp: any) => {
                    this.props.setUsers(resp.data.items)
                    this.props.setTotalUsers(resp.data.totalCount)
                    this.props.toggleIsFetching(false)
                })
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.page.pageSize}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "88c27098-d58c-439b-a5fb-d6a202fce25b"
            }
        })
            .then((resp: any) => {
                this.props.setUsers(resp.data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   page={this.props.page}
                   setPage={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

type MapStatePropsType = {
    users: UserPropsType[],
    page: PagePropsType,
    isFetching: boolean
}

type MapDispatchPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserPropsType[]) => void
    setPage: (currentPage: number) => void
    setTotalUsers: (totalUsers: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID) => dispatch(followAC(userID)),
        unfollow: (userID) => dispatch(unfollowAC(userID)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setPage: (currentPage) => dispatch(setPageAC(currentPage)),
        setTotalUsers: (totalUsers) => dispatch(setTotalUsersAC(totalUsers)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFetching(isFetching))
    }
}

export const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)