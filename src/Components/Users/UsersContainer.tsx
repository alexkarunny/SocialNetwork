import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    PagePropsType, setPageAC, setTotalUsersAC,
    setUsersAC,
    unfollowAC,
    UserPropsType
} from "../../redux/users-page-reducer";
import {Dispatch} from "redux";

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

export const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Users)