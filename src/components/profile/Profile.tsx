import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import { ProfilePageType} from "../../redux/state";

type ProfileType = {
    posts:ProfilePageType
    addPost: (postText:string)=>void
}

export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts  posts={props.posts.posts} addPost={props.addPost}/>
        </div>

    );
};

