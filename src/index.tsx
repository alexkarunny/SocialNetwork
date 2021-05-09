import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let state = store.getState()

export const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App dialogs={state.dialogsPage.dialogs}
                 linkItems={state.navbarPage.linkItems}
                 messages={state.dialogsPage.messages}
                 posts={state.profilePage.posts}
                 addPost={store.addPost.bind(store)}
                 newPostMessage={state.profilePage.newPostMessage}
                 addNewPostMessage={store.addNewPostMessage.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree();

store.subscribe(renderTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
