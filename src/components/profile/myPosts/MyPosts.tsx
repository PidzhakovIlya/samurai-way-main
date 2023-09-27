import React, {createRef, Ref, useRef} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {PostType, ProfilePageType} from "../../../redux/state";

type MyPostsType = {
    posts:PostType[]
}
export const MyPosts = (props: MyPostsType) => {
    debugger
    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} id={p.id} likeCount={p.likeCount}/>)

    // let newPostElement= React.createRef()
    let newPostElement = useRef<HTMLTextAreaElement>(null)
    const addPost = () =>{
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>my Posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            {postsElements}
        </div>

    );
};

