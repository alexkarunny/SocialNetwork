import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {addNewPostMessage, addPost, RootStatePropsType, state, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

export const renderTree = (state: RootStatePropsType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App dialogs={state.dialogsPage.dialogs}
                 linkItems={state.navbarPage.linkItems}
                 messages={state.dialogsPage.messages}
                 posts={state.profilePage.posts}
                 addPost={addPost}
                 newPostMessage={state.profilePage.newPostMessage}
                 addNewPostMessage={addNewPostMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree(state);

subscribe(renderTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
