import {v1} from "uuid";
import {renderTree} from "../render";

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

export const state: RootStatePropsType = {
    profilePage: {
        newPostMessage:'',
        posts: [
            {id: v1(), message: 'Hi, how are you', likes: 10},
            {id: v1(), message: 'It\'s my first post', likes: 15},
            {id: v1(), message: 'It\'s my second post', likes: 5},
        ]
    },
    dialogsPage: {
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
}

export const addPost = (postMessage: string) => {
    const newPost: PostsPropsType = {id: v1(), message: postMessage, likes: 0 }
    state.profilePage.posts.push(newPost)
    debugger
    state.profilePage.newPostMessage = ''
    renderTree(state);

}

export const addNewPostMessage = (newPostText: string) => {
    state.profilePage.newPostMessage = newPostText
    renderTree(state)
}