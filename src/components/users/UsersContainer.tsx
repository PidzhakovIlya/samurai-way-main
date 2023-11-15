import React, {ReactNode} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    followAC,
    ResponseUserItemsType, ResponseUsers,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";

type MapStateToPropsType = {
    users: ResponseUserItemsType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: ResponseUserItemsType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (pagesNumber: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType, AppStateType> {
    constructor(props: UsersPropsType) {
        super(props);

    }

    componentDidMount() {
        axios.get<ResponseUsers>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get<ResponseUsers>(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(res => this.props.setUsers(res.data.items))
    }

    render(): ReactNode {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      users={this.props.users}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}

        />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: ResponseUserItemsType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
        setTotalUsersCount: (pagesNumber: number) => dispatch(setTotalUsersCountAC(pagesNumber))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

