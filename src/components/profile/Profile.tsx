import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/state";
import {AppRootReducerType, ReduxStoreType} from "../../redux/reduxStore";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";

type ProfileType = {
    store:ReduxStoreType


}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
            />
        </div>

    );
};

