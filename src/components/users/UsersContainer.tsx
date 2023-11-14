import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {followAC, ResponseUserItemsType, setUsersAC, unFollowAC} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import Users from "./Users";

type MapStateToPropsType = {
    users:ResponseUserItemsType[]
}

type MapDispatchPropsType = {
    follow:(userId:number)=>void
    unFollow: (userId:number)=>void
    setUsers: (users: ResponseUserItemsType[])=>void
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
        setUsers: (users: ResponseUserItemsType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

