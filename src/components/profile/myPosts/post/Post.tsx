import React from "react";
import s from "./Post.module.css"


type PostPropsType = {
    message: string
    likeCount: number
    id:number
}
export const Post: React.FC<PostPropsType> = ({message, likeCount}) => {
    return (
        <div className={s.item}>

            <img className={s.postImg}
                 src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" alt=""/>
            {message}
            <div>
                <span>Like {likeCount}</span>
            </div>
        </div>


    );
};

