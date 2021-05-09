import {v1} from "uuid";
import {addNewMessageAC, addNewMessagePostAC, dialogsPageReducer} from "./dialogs-page-reducer";
import {navbarPageReducer} from "./navbar-page-reducer";
import {addNewPostMessageAC, addPostAC, profilePageReducer} from "./profile-page-reducer";

export type DialogPropsType = {
    id: string
    name: string
}

export type MessagesPropsType = {
    id: string
    message: string
}

export type PostsPropsType = {
    id: string
    message: string
    likes: number
}

export type LinkItemsPropsType = {
    title: string
    link: string
}

export type DialogsPagePropsType = {
    newMessage: string
    messages: Array<MessagesPropsType>
    dialogs: Array<DialogPropsType>
}

export type ProfilePagePropsType = {
    newPostMessage: string
    posts: Array<PostsPropsType>
}

export type NavbarPagePropsType = {
    linkItems: Array<LinkItemsPropsType>
}

export type RootStatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
    navbarPage: NavbarPagePropsType
}

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addNewPostMessageAC>
    | ReturnType<typeof addNewMessageAC>
    | ReturnType<typeof addNewMessagePostAC>

export type StoreType = {
    _state: RootStatePropsType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStatePropsType
    dispatch: (action: ActionTypes) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            newPostMessage: '',
            posts: [
                {id: v1(), message: 'Hi, how are you', likes: 10},
                {id: v1(), message: 'It\'s my first post', likes: 15},
                {id: v1(), message: 'It\'s my second post', likes: 5},
            ]
        },
        dialogsPage: {
            newMessage: '',
            messages: [
                {id: v1(), message: 'Hello'},
                {id: v1(), message: 'I\'m fine. just not happy'},
                {id: v1(), message: 'I\'m fine.'}
            ],
            dialogs: [
                {id: '1', name: 'Alex'},
                {id: '2', name: 'Alexei'},
                {id: '3', name: 'Ivan'},
                {id: '4', name: 'Katya'},
                {id: '5', name: 'Jenya'},
                {id: '6', name: 'Andrew'},

            ]
        },
        navbarPage: {
            linkItems: [
                {title: 'Profile', link: '/profile'},
                {title: 'Dialog', link: '/dialogs'},
                {title: 'News', link: '/news'},
                {title: 'Music', link: '/music'},
                {title: 'Settings', link: '/settings'},
            ]
        }
    },
    _onChange() {
        console.log('state changed');
    },
    subscribe(observer) {
        this._onChange = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
        this._state.navbarPage = navbarPageReducer(this._state.navbarPage, action)
        this._onChange();
    }

}





