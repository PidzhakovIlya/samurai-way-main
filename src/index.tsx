import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {addPost, state} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

addPost
ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost}/>
    </BrowserRouter>,
        document.getElementById('root')

);