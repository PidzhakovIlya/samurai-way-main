import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className={"header"}>
                <div className="app-logo">
                    <img src="https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png"
                         alt=""/>
                </div>
            </header>
            <nav className={"navigation-app"}>
                <ul>
                    <li><a href="">Profile</a></li>
                    <li><a href="">Message</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Music</a></li>
                    <li><a href="">Settings</a></li>
                </ul>
            </nav>
            <div className="content">
                <div className="image-title">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6MLT2lpj3M85eFPT2oNNivGYx_saZEww8Q&usqp=CAU"
                        alt=""/>
                </div>
                <div>Ava + descroption</div>
                <div>
                    <div>my Post</div>
                    <div>New Post</div>
                    <div>
                        <div>post1</div>
                        <div>post2</div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default App;
