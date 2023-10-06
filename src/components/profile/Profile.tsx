import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePage:ProfilePageType
    addPost: ()=>void
    updateNewPostText:(updateNewPostText:string)=>void
}

export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts  posts={props.profilePage.posts}
                      addPost={props.addPost}
                      newPostText={props.profilePage.newPostText}
                      updateNewPostText={props.updateNewPostText}/>
        </div>

    );
};

