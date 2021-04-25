import {addPost, RootStatePropsType} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const renderTree = (state: RootStatePropsType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App dialogs={state.dialogsPage.dialogs} linkItems={state.navbarPage.linkItems}
                 messages={state.dialogsPage.messages} posts={state.profilePage.posts} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}