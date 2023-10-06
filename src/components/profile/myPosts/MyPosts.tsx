import React, {createRef, Ref, useRef} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {addPost, PostType, ProfilePageType} from "../../../redux/state";

type MyPostsType = {
    posts:PostType[]
    addPost:(postText:string)=>void
}
export const MyPosts = (props: MyPostsType) => {

    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} id={p.id} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () =>{
        if(newPostElement.current){
            props.addPost(newPostElement.current.value)
            newPostElement.current.value='';
        }

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

