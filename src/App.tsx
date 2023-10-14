import React from "react";
import "./App.css";
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {ActionType, StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionType) => void

}

const App: React.FC<AppPropsType> = (props) => {
    let state = props.store.getState()
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className={"content-wrapper"}>
                <Route path="/dialogs" render={() => <Dialogs state={state.dialogsPage}
                                                              dispatch={props.dispatch}
                />}/>
                <Route path="/profile"
                       render={() => <Profile profilePage={state.profilePage}
                                              dispatch={props.dispatch}
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
