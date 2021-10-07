import {v1} from "uuid";

const ADD_POST = 'ADD_POST';
const ON_CHANGE_POST = 'ON_CHANGE_POST';

export type PostsPropsType = {
    id: string
    message: string
    likes: number
}
type PropsType = {
    newPostMessage: string
    posts: PostsPropsType[]
}

export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}

export const onChangePostAC = (newPostText: string) => {
    return {
        type: ON_CHANGE_POST,
        newPostText
    } as const
}

const initialState: PropsType = {
    newPostMessage: '',
    posts: [
        {id: v1(), message: 'Hi, how are you', likes: 10},
        {id: v1(), message: 'It\'s my first post', likes: 15},
        {id: v1(), message: 'It\'s my second post', likes: 5},
    ]
}

type AllActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof onChangePostAC>

export const profilePageReducer = (state: PropsType = initialState, action: AllActionType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsPropsType = {id: v1(), message: state.newPostMessage, likes: 0}
            state.posts.push(newPost)
            state.newPostMessage = ''
            return {...state};
        case ON_CHANGE_POST:
            state.newPostMessage = action.newPostText
            return {...state};
        default:
            return state
    }
}