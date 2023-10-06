import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, newMessageText, StateType, updateNewPostText} from "./redux/state";

export const rerenderEntireTree =(state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 newMessageText={newMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}