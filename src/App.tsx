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
import {DialogPropsType, LinkItemsPropsType, MessagesPropsType, PostsPropsType} from "./redux/state";

type AppPropsType = {
    posts: Array<PostsPropsType>
    messages: Array<MessagesPropsType>
    dialogs: Array<DialogPropsType>
    linkItems: Array<LinkItemsPropsType>
    addPost: (postMessage: string) => void
    addNewPostMessage: (newPostText: string) => void
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
                                                                    addPost={props.addPost}
                                                                    newPostMessage={props.newPostMessage}
                                                                    addNewPostMessage={props.addNewPostMessage}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs titleDialog={'Dialogs'}
                                                                    titleMessage={'Messages'}
                                                                    dialogs={props.dialogs}
                                                                    messages={props.messages}/>}/>
                    <Route path={'/news'} render={() => <News title={'News'}/>}/>
                    <Route path={'/music'} render={() => <Music title={'Music'}/>}/>
                    <Route path={'/settings'} render={() => <Settings title={'Settings'}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


