import React from "react";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ResponseUserType} from "../../redux/profileReducer";

export type ProfileType = {
    profile: ResponseUserType | null
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo profile = {props.profile}/>
            <MyPostsContainer />
        </div>

    );
};

