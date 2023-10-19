import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {AppRootReducerType} from "../../../redux/reduxStore";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ActionType} from "../../../redux/state";

// type MyPostsType = {
//     store: ReduxStoreType
// }
//
//
// export const MyPostsContainer = (props: MyPostsType) => {
//     let state = props.store.getState().profilePage
//     const addPost = () => {
//         props.store.dispatch(addPostAC())
//     }
//
//     const onPostChange = (text: string) => {
//         props.store.dispatch(updateNewPostTextAC(text))
//     }
//
//     return (
//         <MyPosts posts={state.posts} updateNewPostText={onPostChange} newPostText={state.newPostText}
//                  addPost={addPost}/>
//
//     );
// };

let mapStateToProps = (state:AppRootReducerType) =>{
    return {
        posts:state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch:(action:ActionType)=>void) =>{
    return {
        updateNewPostText:(text:string)=>{
            dispatch(updateNewPostTextAC(text))
        },
        addPost:()=>{
            dispatch(addPostAC())
        }
    }
}



export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

