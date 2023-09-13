import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";

export const MyPosts = () => {
    const postData = [
        {id: 1, message: "Hi,how are your?", likeCount: 3},
        {id: 2, message: "it`s my first post", likeCount: 15},
        {id: 3, message: "hello", likeCount: 6},
        {id: 4, message: "Day 30", likeCount: 654},
        {id: 5, message: "Dimych", likeCount: 55}
    ]
    return (
        <div className={s.postsBlock}>
            <h3>my Posts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            {postData.map(el=> <Post key={el.id} message={el.message} id={el.id} likeCount={el.likeCount}/>)}
        </div>

    );
};

