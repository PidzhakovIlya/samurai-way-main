import React from "react";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";

type ProfileType = {
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>

    );
};

