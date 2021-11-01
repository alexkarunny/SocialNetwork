import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileInfoPropsType, setUserProfile} from "../../redux/profile-page-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

type PathParamsType = {
    userID: string
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileContainerAPI extends React.Component<PropsType> {
    componentDidMount() {
        let userID = this.props.match.params.userID
        usersAPI.getUser(userID)
            .then((data: any) => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profileInfo={this.props.profileInfo}/>
        )
    }
}

type MapStatePropsType = {
    profileInfo: ProfileInfoPropsType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profileInfo: ProfileInfoPropsType) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}

const WithURLDataContainerComponent = withRouter(ProfileContainerAPI)

export const ProfileContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent)



