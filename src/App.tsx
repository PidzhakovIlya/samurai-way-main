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
import { StoreType} from "./redux/state";

type AppPropsType = {
    store:StoreType

}

const App:React.FC<AppPropsType> = (props) => {
    let state = props.store.getState()
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className={"content-wrapper"}>
                <Route path="/dialogs" render={() => <Dialogs state={state.dialogsPage}
                                                              addMessage={props.store.addMessage.bind(props.store)}
                                                              newMessageText={props.store.newMessageText.bind(props.store)}
                />}/>
                <Route path="/profile"
                       render={() => <Profile profilePage={state.profilePage}
                                              addPost={props.store.addPost.bind(props.store)}
                                              updateNewPostText={props.store.updateNewPostText.bind(props.store)}
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
