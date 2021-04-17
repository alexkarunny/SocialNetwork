
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

export type RootStatePropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
    navbarPage: NavbarPagePropsType
}

export const state: RootStatePropsType = {
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
