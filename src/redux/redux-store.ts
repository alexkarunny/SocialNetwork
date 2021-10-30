import {combineReducers, createStore, Store} from "redux";
import {dialogsPageReducer} from "./dialogs-page-reducer";
import {navbarPageReducer} from "./navbar-page-reducer";
import {profilePageReducer} from "./profile-page-reducer";
import {usersPageReducer} from "./users-page-reducer";
import {authReducer} from "./auth-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    dialogsPage: dialogsPageReducer,
    navbarPage: navbarPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})

export const store: Store<AppStateType> = createStore(rootReducer);