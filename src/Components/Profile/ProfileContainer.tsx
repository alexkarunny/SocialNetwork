import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, ProfileInfoPropsType} from "../../redux/profile-page-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type PathParamsType = {
    userID: string
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userID = this.props.match.params.userID
        this.props.getProfile(userID)
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
    getProfile: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profileInfo: state.profilePage.profileInfo,
    }
}

const WithURLDataContainerComponent = withRouter(ProfileContainer)

export default withAuthRedirect(connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {getProfile})(WithURLDataContainerComponent))



