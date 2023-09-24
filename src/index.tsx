import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostType} from "./components/profile/myPosts/MyPosts";
import {MessageType} from "./components/Dialogs/Message/Message";
import {DialogType} from "./components/Dialogs/Dialogs";




const dialogs :DialogType[] = [
    {id: 1, name: "Ilya"},
    {id: 2, name: "Inessa"},
    {id: 3, name: "Egor"},
    {id: 4, name: "Oleg"},
    {id: 5, name: "Dimych"}
]

const messages :MessageType[] = [
    {id: 1, message: "hi"},
    {id: 2, message: "hey"},
    {id: 3, message: "hello"},
    {id: 4, message: "Day 30"},
    {id: 5, message: "Dimych"}
]

const posts:PostType[] = [
    {id: 1, message: "Hi,how are your?", likeCount: 3},
    {id: 2, message: "it`s my first post", likeCount: 15},
    {id: 3, message: "hello", likeCount: 6},
    {id: 4, message: "Day 30", likeCount: 654},
    {id: 5, message: "Dimych", likeCount: 55}
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);