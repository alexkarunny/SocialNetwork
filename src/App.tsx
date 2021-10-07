import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {LinkItemsPropsType, PostsPropsType} from "./redux/state";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";

export type AppPropsType = {
    posts: Array<PostsPropsType>
    linkItems: Array<LinkItemsPropsType>
    dispatch: (action: any) => void
    newPostMessage: string
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar navItem={props.linkItems}/>
                <div className="app-wrapper-content">
                    <Route path={'/profile'} render={() => <Profile posts={props.posts}
                                                                    dispatch={props.dispatch}
                                                                    newPostMessage={props.newPostMessage}
                    />
                    }
                    />
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


