import {v1} from "uuid";

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

export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof addNewPostMessageAC>

export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    } as const
}

export const addNewPostMessageAC = (newPostText: string) => {
    return {
        type: 'ADD-NEW-POST-MESSAGE',
        newPostText: newPostText
    } as const
}



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
        if (action.type === 'ADD-POST') {
            debugger
            const newPost: PostsPropsType = {id: v1(), message: action.postMessage, likes: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostMessage = ''
            this._onChange();
        } else if (action.type === 'ADD-NEW-POST-MESSAGE') {
            this._state.profilePage.newPostMessage = action.newPostText
            this._onChange()
        }
    }

}





