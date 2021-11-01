import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    PagePropsType,
    setPage,
    setTotalUsers,
    setUsers,
    toggleIsFetching,
    unfollow,
    UserPropsType
} from "../../redux/users-page-reducer";
import React from "react";
import {Preloader} from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";

export class UsersContainerAPI extends React.Component<MapStatePropsType & MapDispatchPropsType> {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true)
            getUsers(this.props.page.currentPage, this.props.page.pageSize)
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
        getUsers(pageNumber, this.props.page.pageSize)
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

export const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType , {}, AppStateType>(mapStateToProps, { follow, unfollow, setUsers, setPage, setTotalUsers, toggleIsFetching })(UsersContainerAPI)