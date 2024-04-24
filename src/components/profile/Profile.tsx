import React from "react";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ResponseUserType} from "../../redux/profileReducer";

export type ProfileType = {
    profile: ResponseUserType | null
    status: string | null
    updateStatus: (status:string)=>void
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo profile = {props.profile} status = {props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>

    );
};

