import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {PostType, ProfilePageType} from "../../../redux/state";

type MyPostsType = {
    posts:PostType[]
}
export const MyPosts = (props: MyPostsType) => {
    debugger
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} id={p.id} likeCount={p.likeCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>my Posts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            {postsElements}
        </div>

    );
};

