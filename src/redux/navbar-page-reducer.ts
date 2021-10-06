import {NavbarPagePropsType} from "./state";

const initialState: NavbarPagePropsType = {
    linkItems: [
        {title: 'Profile', link: '/profile'},
        {title: 'Dialog', link: '/dialogs'},
        {title: 'News', link: '/news'},
        {title: 'Music', link: '/music'},
        {title: 'Settings', link: '/settings'},
    ]
}

export const navbarPageReducer = (state: NavbarPagePropsType = initialState, action: any) => {
    return state;
}