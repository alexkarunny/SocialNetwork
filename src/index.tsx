import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type DialogPropsType = {
    id: string
    name: string
}

export type MessagesPropsType = {
    id: number
    message: string
}

export type PostsPropsType = {
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
    posts: Array<PostsPropsType>
}

export type NavbarPagePropsType = {
    linkItems: Array<LinkItemsPropsType>
}

export type StatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
    navbarPage: NavbarPagePropsType
}

export const state: StatePropsType = {
    profilePage: {
        posts: [
            {message: 'Hi, how are you', likes: 10},
            {message: 'It\'s my first post', likes: 15},
            {message: 'It\'s my second post', likes: 5},
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'I\'m fine. just not happy'},
            {id: 3, message: 'I\'m fine.'}
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


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
