import React from "react";
import s from "./Post.module.css"
import {log} from "util";


type PostPropsType = {
    message: string
    like: number
}
export const Post:React.FC<PostPropsType> = (props) => {
    console.log(props)
    return (
            <div className={s.item}>
                <img className={s.postImg} src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" alt=""/>
                {props.message}
                <div>
                    <span>Like {props.like}</span>
                </div>
            </div>


    );
};

