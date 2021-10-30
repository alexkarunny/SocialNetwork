import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthPropsType, setUserData, UserDataProps} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type OwnProps = MapStatePropsType & MapDispatchPropsType

export class HeaderContainerAPI extends React.Component<OwnProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "88c27098-d58c-439b-a5fb-d6a202fce25b"
                }
            }
        ).then((response: any) => {
            this.props.setUserData(response.data.data)
        })
    }

    render() {
        return (
            <Header authInfo={this.props.auth}/>
        )
    }
}

type MapStatePropsType = {
    auth: AuthPropsType
}

type MapDispatchPropsType = {
    setUserData: (data: UserDataProps) => void
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        auth: state.auth
    }
}

export const HeaderContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, {setUserData})(HeaderContainerAPI)