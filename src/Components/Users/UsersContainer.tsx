import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    PagePropsType,
    setPage,
    setTotalUsers,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow,
    UserPropsType
} from "../../redux/users-page-reducer";
import React from "react";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

export class UsersContainerAPI extends React.Component<MapStatePropsType & MapDispatchPropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true)
           usersAPI.getUsers(this.props.page.currentPage, this.props.page.pageSize)
                .then((data: any) => {
                    this.props.setUsers(data.items)
                    this.props.setTotalUsers(data.totalCount)
                    this.props.toggleIsFetching(false)
                })
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.page.pageSize)
            .then((data: any) => {
                this.props.setUsers(data.items)
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
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

type MapStatePropsType = {
    users: UserPropsType[],
    page: PagePropsType,
    isFetching: boolean,
    followingInProgress: string[]
}

type MapDispatchPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserPropsType[]) => void
    setPage: (currentPage: number) => void
    setTotalUsers: (totalUsers: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userID: string ) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType , {}, AppStateType>(mapStateToProps, { follow, unfollow, setUsers, setPage, setTotalUsers, toggleIsFetching, toggleFollowingProgress })(UsersContainerAPI)