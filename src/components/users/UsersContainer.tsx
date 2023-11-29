import React, {ReactNode} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    follow,
    ResponseUserItemsType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow,
    toggleIsFollowing
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {usersApi} from "../../api/api";

type MapStateToPropsType = {
    users: ResponseUserItemsType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing:number[]
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: ResponseUserItemsType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (pagesNumber: number) => void
    toggleIsFetching: (toggle: boolean) => void
    toggleIsFollowing: (userId:number, isFetching: boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType, AppStateType> {
    constructor(props: UsersPropsType) {
        super(props);

    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        usersApi.getUsers(p, this.props.pageSize)
            .then(data => {
                    this.props.setUsers(data.items)
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
                        toggleIsFollowing={this.props.toggleIsFollowing}
                        isFollowing={this.props.isFollowing}
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
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowing
})(UsersContainer)


