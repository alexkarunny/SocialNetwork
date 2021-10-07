import {addPostAC, onChangePostAC, PostsPropsType} from "../../../redux/profile-page-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: PostsPropsType[]
    newPost: string
}

type MapDispatchToPropsType = {
    onChangePost: (text: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPost: state.profilePage.newPostMessage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onChangePost: (text: string) => dispatch(onChangePostAC(text)),
        addPost: () => dispatch(addPostAC())
    }
}

export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps, mapDispatchToProps
)(MyPosts)