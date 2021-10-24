import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileInfoPropsType, setUserProfile} from "../../redux/profile-page-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userID: string
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileContainerAPI extends React.Component<PropsType> {
    componentDidMount() {
        let userID = this.props.match.params.userID
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "88c27098-d58c-439b-a5fb-d6a202fce25b"
                }
            }
        ).then((resp: any) => {
            this.props.setUserProfile(resp.data)
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



