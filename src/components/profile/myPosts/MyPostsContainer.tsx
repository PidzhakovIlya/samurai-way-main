import React, {createRef} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {ActionType, PostType} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {AppRootReducerType, ReduxStoreType} from "../../../redux/reduxStore";
import {MyPosts} from "./MyPosts";

type MyPostsType = {
    store: ReduxStoreType
}


export const MyPostsContainer = (props: MyPostsType) => {
    let state = props.store.getState().profilePage
    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts posts={state.posts} updateNewPostText={onPostChange} newPostText={state.newPostText}
                 addPost={addPost}/>

    );
};

