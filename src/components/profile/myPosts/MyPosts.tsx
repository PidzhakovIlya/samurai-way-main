import React, {createRef} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {ActionType, PostType, UpdateNewPostTextActionType} from "../../../redux/state";

type MyPostsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}


export const MyPosts = (props: MyPostsType) => {

    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} id={p.id} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if (newPostElement.current) {

            props.dispatch({type: 'ADD-POST'})
        }

    }

    const onChangeTextareaHandler = () => {
        if (newPostElement.current) props.dispatch(
            {type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value}
        )
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

