import React, {ReactNode} from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/img.png";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {ResponseUsers} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/reduxStore";


class Users extends React.Component<UsersPropsType, AppStateType> {
constructor(props:UsersPropsType) {
    super(props);
    axios.get<ResponseUsers>("https://social-network.samuraijs.com/api/1.0/users")
        .then(res => this.props.setUsers(res.data.items))
}
    // getUsers = () => {
    //     if (this.props.users.length === 0)
    //
    // }

    render():ReactNode {
        return <div>
            {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                      <img className={s.photo} src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                this.props.unFollow(u.id)
                            }}>follow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
        </div>;
    }
}

export default Users;