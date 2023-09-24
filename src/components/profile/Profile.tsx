import React from "react";
import s from "./Profile.module.css"
import {MyPosts, MyPostsPropsType, PostType} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export const Profile = (props:MyPostsPropsType) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts  posts={props.posts} />
        </div>

    );
};

