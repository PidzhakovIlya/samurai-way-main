import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.imageTitle}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6MLT2lpj3M85eFPT2oNNivGYx_saZEww8Q&usqp=CAU"
                    alt=""/>
            </div>
            <div>Ava + descroption</div>
            <div>
                <div>my Post</div>
                <div>New Post</div>
                <div>
                    <div>post1</div>
                    <div>post2</div>
                </div>
            </div>

        </div>

    );
};

