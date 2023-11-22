import s from "./users.module.css";
import userPhoto from "../../assets/img.png";
import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType =
    Omit<UsersPropsType, "setTotalUsersCount" | "setUsers" | "setCurrentPage" | "isFetching" | "toggleIsFetching">
    & {
    onPageChanged: (pageNumber: number) => void
}

type ResponseFollowType = {
    resultCode: number
    messages: ['Something wrong'],
    data: {}
}

export const Users: React.FC<UsersType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => <span onClick={(e) => props.onPageChanged(p)}
                                      className={props.currentPage === p ? s.selectedPage : ""}> {p}</span>)}

            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                           <img className={s.photo}
                                src={u.photos.small !== null ? u.photos.small : userPhoto}
                                alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                axios.delete<ResponseFollowType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {'API-KEY': "23d212d6-5705-4d11-bb70-b9858302554f"}
                                })

                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.unFollow(u.id)
                                        }
                                    })

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post<ResponseFollowType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {userId: u.id}, {
                                    withCredentials: true,
                                    headers: {'API-KEY': "23d212d6-5705-4d11-bb70-b9858302554f"}
                                })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                            }}>follow</button>}
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
    )
}