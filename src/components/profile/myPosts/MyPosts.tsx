import React, {createRef} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {ActionType, PostType} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";

type MyPostsType = {
    posts: PostType[]
    newPostText: string
    addPost: ()=>void
    updateNewPostText: (text:string)=>void
}


export const MyPosts = (props: MyPostsType) => {

    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} id={p.id} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
    }
    const onChangeTextareaHandler = () => {
        if (newPostElement.current)
            props.updateNewPostText(newPostElement.current.value)
    }
    return (
        <div className={s.postsBlock}>
            <h3>my Posts</h3>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onChangeTextareaHandler}/>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            {postsElements}
        </div>

    );
};

