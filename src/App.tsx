import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {LinkItemsPropsType} from "./redux/navbar-page-reducer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import WithURLDataContainerComponent from "./Components/Profile/ProfileContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";


export type AppPropsType = {
    linkItems: Array<LinkItemsPropsType>
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar navItem={props.linkItems}/>
                <div className="app-wrapper-content">
                    <Route path={'/profile/:userID'} render={() => <WithURLDataContainerComponent/>}/>
                    <Route path={'/dialogs'} render={() => (
                        <DialogsContainer
                            //titleDialog={'Dialogs'}
                            //titleMessage={'Messages'}
                        />)}
                    />
                    <Route path={'/news'} render={() => <News title={'News'}/>}/>
                    <Route path={'/music'} render={() => <Music title={'Music'}/>}/>
                    <Route path={'/settings'} render={() => <Settings title={'Settings'}/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


