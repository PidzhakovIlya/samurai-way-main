import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <MyPosts/>
        </div>

    );
};

