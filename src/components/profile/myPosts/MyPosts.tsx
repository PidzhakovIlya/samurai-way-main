import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>my Posts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add Post</button>
                </div>
            </div>

            <Post message="Hi,how are your?" like={11}/>
            <Post message='it`s my first post' like={22}/>
        </div>

    );
};

