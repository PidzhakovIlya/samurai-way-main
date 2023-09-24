import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";

export type PostType = {
        id: number
        message: string
        likeCount: number
}

export type MyPostsPropsType = {
  posts: PostType[]
}

export const MyPosts = (props: MyPostsPropsType) => {
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

