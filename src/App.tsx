import React from "react";
import "./App.css";
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs, DialogType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {PostType} from "./components/profile/myPosts/MyPosts";
import {MessageType} from "./components/Dialogs/Message/Message";


export type AppPropsType = {
    posts: PostType[]
    messages: MessageType[]
    dialogs: DialogType[]
}

function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={"content-wrapper"}>
                    {/*<Route path="/dialogs" component={Dialogs}/>*/}
                    {/*<Route path="/profile" component={Profile}/>*/}
                    {/*<Route path="/news" component={News}/>*/}
                    {/*<Route path="/music" component={Music}/>*/}
                    {/*<Route path="/settings" component={Settings}/>*/}
                    <Route path="/dialogs" render={()=> <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path="/profile" render={()=> <Profile posts={props.posts}/>}/>
                    <Route path="/news" render={()=> <News/>}/>
                    <Route path="/music" render={()=> <Music/>}/>
                    <Route path="/settings" render={()=> <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
