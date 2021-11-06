import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {follow, getUsers, PagePropsType, unfollow, UserPropsType} from "../../redux/users-page-reducer";
import React from "react";
import {Preloader} from "../common/Preloader/Preloader";

export class UsersContainerAPI extends React.Component<MapStatePropsType & MapDispatchPropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.page.currentPage, this.props.page.pageSize)
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.page.pageSize)
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
    getUsers: (currentPage: number, pageSize: number) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    follow, unfollow,
     getUsers
})(UsersContainerAPI)