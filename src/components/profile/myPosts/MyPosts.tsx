import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";

export const MyPosts = () => {
    return (
        <div className={s.content}>
            <div className={s.imageTitle}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6MLT2lpj3M85eFPT2oNNivGYx_saZEww8Q&usqp=CAU"
                    alt=""/>
            </div>
            <div>Ava + descroption</div>
            <div>
                <div>my Posts</div>
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
                <Post message = "Hi,how are your?" like={11}/>
                <Post message = 'it`s my first post' like={22}/>
            </div>

        </div>

    );
};

