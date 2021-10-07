import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {LinkItemsPropsType} from "./redux/navbar-page-reducer";


export type AppPropsType = {
    linkItems: Array<LinkItemsPropsType>
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar navItem={props.linkItems}/>
                <div className="app-wrapper-content">
                    <Route path={'/profile'} render={() => <Profile />}/>
                    <Route path={'/dialogs'} render={() => (
                        <DialogsContainer
                            titleDialog={'Dialogs'}
                            titleMessage={'Messages'}
                        />)}
                    />
                    <Route path={'/news'} render={() => <News title={'News'}/>}/>
                    <Route path={'/music'} render={() => <Music title={'Music'}/>}/>
                    <Route path={'/settings'} render={() => <Settings title={'Settings'}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


