import React from "react";
import {addPostAC, ProfilePageType, updateNewPostTextAC} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/reduxStore";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapDispatchPropsType = {
    updateNewPostText:(text:string)=>void
    addPost:()=>void
}
export type MyPostPropsType = Omit<ProfilePageType, 'profile'> & MapDispatchPropsType

let mapStateToProps = (state:AppStateType):Omit<ProfilePageType, 'profile'> =>{
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

