import s from "./users.module.css";
import userPhoto from "../../assets/img.png";
import React from "react";
import {UsersPropsType} from "./UsersContainer";

type UsersType = Omit<UsersPropsType, 'setTotalUsersCount'| 'setUsers'| 'setCurrentPage'> & {
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
                                      className={props.currentPage === p ? s.selectedPage : ''}> {p}</span>)}

            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                      <img className={s.photo} src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
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
    )
}