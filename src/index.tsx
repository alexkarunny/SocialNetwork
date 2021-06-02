import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {AppStateType, store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";


export const renderTree = () => {
    let state: AppStateType = store.getState()
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App dialogs={state.dialogsPage.dialogs}
                     linkItems={state.navbarPage.linkItems}
                     messages={state.dialogsPage.messages}
                     posts={state.profilePage.posts}
                     dispatch={store.dispatch.bind(store)}
                     newPostMessage={state.profilePage.newPostMessage}
                     newMessage={state.dialogsPage.newMessage}
                />
            </Provider>
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
