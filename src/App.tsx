import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {state} from "./index";

function App() {

    const rootState = state;

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar navItem={rootState.navbarPage.linkItems}/>
                <div className="app-wrapper-content">
                    <Route path={'/profile'} render={() => <Profile posts={rootState.profilePage.posts}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs titleDialog={'Dialogs'} titleMessage={'Messages'}
                                                                    dialogs={rootState.dialogsPage.dialogs}
                                                                    messages={rootState.dialogsPage.messages}/>}/>
                    <Route path={'/news'} render={() => <News title={'News'}/>}/>
                    <Route path={'/music'} render={() => <Music title={'Music'}/>}/>
                    <Route path={'/settings'} render={() => <Settings title={'Settings'}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


