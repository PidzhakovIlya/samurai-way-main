import React from "react";
import {addPostAC, PostType, ProfilePageType, updateNewPostTextAC} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/reduxStore";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapDispatchPropsType = {
    updateNewPostText:(text:string)=>void
    addPost:()=>void
}
type MapStateTiPropsType = {
    posts: PostType[]
    newPostText: string
}
export type MyPostPropsType =MapStateTiPropsType & MapDispatchPropsType

let mapStateToProps = (state:AppStateType):MapStateTiPropsType =>{
    return {
        posts:state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType =>{
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

