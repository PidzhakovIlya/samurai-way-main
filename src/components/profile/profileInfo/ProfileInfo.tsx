import React from "react";
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div className={s.profileInfoBlock}>
            <div className={s.imageTitle}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6MLT2lpj3M85eFPT2oNNivGYx_saZEww8Q&usqp=CAU"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + description
            </div>
        </div>

    );
};

