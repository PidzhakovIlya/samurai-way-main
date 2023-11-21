import React, {ReactNode} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    follow,
    ResponseUserItemsType,
    ResponseUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow
} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";

type MapStateToPropsType = {
    users: ResponseUserItemsType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: ResponseUserItemsType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (pagesNumber: number) => void
    toggleIsFetching: (toggle: boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType, AppStateType> {
    constructor(props: UsersPropsType) {
        super(props);

    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get<ResponseUsers>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        axios.get<ResponseUsers>(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(res => {
                    this.props.setUsers(res.data.items)
                    this.props.toggleIsFetching(false)
                }
            )
    }

    render(): ReactNode {
        return (
            <>
                {this.props.isFetching ? <Preloader/>
                    : <Users
                        totalUsersCount={this.props.totalUsersCount}
                        users={this.props.users}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        currentPage={this.props.currentPage}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                    />}

            </>)
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)


