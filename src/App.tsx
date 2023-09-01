import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className={'content-wrapper'}>
                <Dialogs/>
                {/*<Profile />*/}
            </div>
        </div>
    );
}

export default App;
