import React from 'react';
import s from "./users.module.css"
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg',
            followed: false,
            fullName: 'Ilya',
            status: 'I`m learn to react',
            location: {city: "Saints-Petersburg", country: "Russia"}
        },
            {
                id: 2,
                photoUrl: 'https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg',
                followed: false,
                fullName: 'Oleg',
                status: 'I`m speedy',
                location: {city: "Saints-Petersburg", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: 'https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg',
                followed: false,
                fullName: 'Egor',
                status: 'I`m mechanic',
                location: {city: "Satka", country: "Russia"}
            }])
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                      <img className={s.photo} src={u.photoUrl} alt=""/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unFollow(u.id)
                            }}>follow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};
