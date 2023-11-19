import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../Profile";
import {Preloader} from "../../common/Preloader";



export const ProfileInfo = (props:ProfileType) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div className={s.profileInfoBlock}>
            <div className={s.imageTitle}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6MLT2lpj3M85eFPT2oNNivGYx_saZEww8Q&usqp=CAU"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small} alt=""/>
                Ava + description
            </div>
        </div>

    );
};

