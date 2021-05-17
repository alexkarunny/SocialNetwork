import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";



export const renderTree = () => {
    let state = store.getState()
    ReactDOM.render(
        <React.StrictMode>
            <App dialogs={state.dialogsPageReducer.dialogs}
                 linkItems={state.navbarPageReducer.linkItems}
                 messages={state.dialogsPageReducer.messages}
                 posts={state.profilePageReducer.posts}
                 dispatch={store.dispatch.bind(store)}
                 newPostMessage={state.profilePageReducer.newPostMessage}
                 newMessage={state.dialogsPageReducer.newMessage}
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
