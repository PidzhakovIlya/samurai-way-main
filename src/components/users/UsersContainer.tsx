import React from 'react';
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/usersReducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    users:UserType[]
}

type MapDispatchPropsType = {
    follow:(userId:number)=>void
    unFollow: (userId:number)=>void
    setUsers: (users: UserType[])=>void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchPropsType;

const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {users: state.usersPage.users}
}

const mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType =>{
    return {
        follow:(userId:number)=>{
            dispatch(followAC(userId))
        },
        unFollow:(userId:number)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

