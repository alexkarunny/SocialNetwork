import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthPropsType, getLogin} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type OwnProps = MapStatePropsType & MapDispatchPropsType

export class HeaderContainerAPI extends React.Component<OwnProps> {
    componentDidMount() {
        this.props.getLogin()
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
    getLogin: () => void
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        auth: state.auth
    }
}

export const HeaderContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(MapStateToProps, {getLogin})(HeaderContainerAPI)