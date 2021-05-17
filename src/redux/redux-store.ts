import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogs-page-reducer";
import {navbarPageReducer} from "./navbar-page-reducer";
import {profilePageReducer} from "./profile-page-reducer";

let reducers = combineReducers({
    dialogsPageReducer,
    navbarPageReducer,
    profilePageReducer
})

export const store = createStore(reducers);