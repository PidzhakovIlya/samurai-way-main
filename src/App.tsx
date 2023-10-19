import React from "react";
import "./App.css";
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {ReduxStoreType} from "./redux/reduxStore";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    store: ReduxStoreType
}

const App: React.FC<AppPropsType>= ({store}) => {


    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className={"content-wrapper"}>
                <Route path="/dialogs" render={() => <DialogsContainer store={store}
                />}/>
                {/*<Route path="/profile"*/}
                {/*       render={() => <Profile profilePage={store.profilePage}*/}
                {/*                              dispatch={dispatch}*/}
                {/*       />}*/}
                {/*/> */}
                <Route path="/profile"
                       render={() => <Profile store={store}
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
