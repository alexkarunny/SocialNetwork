import {combineReducers, createStore, Store} from "redux";
import {dialogsPageReducer} from "./dialogs-page-reducer";
import {navbarPageReducer} from "./navbar-page-reducer";
import {profilePageReducer} from "./profile-page-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    dialogsPage: dialogsPageReducer,
    navbarPage: navbarPageReducer,
    profilePage: profilePageReducer
})

export const store: Store<AppStateType> = createStore(rootReducer);