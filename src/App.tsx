import React from "react";
import "./App.css";
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import { StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (updateNewPostText: string) => void
    addMessage: () => void
    newMessageText:(text:string)=>void
}

function App(props: AppPropsType) {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className={"content-wrapper"}>
                <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}
                                                              addMessage={props.addMessage}
                                                              newMessageText={props.newMessageText}
                />}/>
                <Route path="/profile"
                       render={() => <Profile profilePage={props.state.profilePage}
                                              addPost={props.addPost}
                                              updateNewPostText={props.updateNewPostText}
                       />}
                />
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
