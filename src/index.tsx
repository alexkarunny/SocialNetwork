import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {AppStateType, store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

const state: AppStateType = store.getState()

ReactDOM.render(
    <Provider store={store}>
        <App
            linkItems={state.navbarPage.linkItems}
        />
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
