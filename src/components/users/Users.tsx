import React, {useEffect} from 'react';
import s from "./users.module.css"
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {ResponseUsers} from "../../redux/usersReducer";
import userPhoto from '../../assets/img.png'


export const Users = (props: UsersPropsType) => {

    const getUsers = ()=>{
        if(props.users.length === 0 )
        axios.get<ResponseUsers>("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => props.setUsers(res.data.items))
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                      <img className={s.photo} src={u.photos.small!==null? u.photos.small: userPhoto } alt=""/>
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
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};
