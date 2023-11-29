import s from "./users.module.css";
import userPhoto from "../../assets/img.png";
import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../api/api";

type UsersType =
    Omit<UsersPropsType, "setTotalUsersCount" | "setUsers" | "setCurrentPage" | "isFetching" | "toggleIsFetching">
    & {
    onPageChanged: (pageNumber: number) => void
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
                                props.toggleIsFollowing(u.id, true)
                                usersApi.unFollow(u.id)
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.unFollow(u.id)
                                        }
                                    }).finally(() => props.toggleIsFollowing(u.id, false))

                            }} disabled={props.isFollowing.some(id => id === u.id)}>Unfollow</button>
                            : <button onClick={() => {
                                props.toggleIsFollowing(u.id, true)
                                usersApi.follow(u.id)
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    }).finally(() => props.toggleIsFollowing(u.id, false))
                            }} disabled={props.isFollowing.some(id => id === u.id)}>follow</button>}
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