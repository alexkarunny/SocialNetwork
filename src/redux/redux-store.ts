import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogs-page-reducer";
import {navbarPageReducer} from "./navbar-page-reducer";
import {profilePageReducer} from "./profile-page-reducer";
import {StoreType} from "./state";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    dialogsPage: dialogsPageReducer,
    navbarPage: navbarPageReducer,
    profilePage: profilePageReducer
})

export let store = createStore(rootReducer);