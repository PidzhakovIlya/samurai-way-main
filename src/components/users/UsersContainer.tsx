import React, {ComponentType, ReactNode} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    ResponseUserItemsType,
     getUsers, unFollowTC, followTC
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {compose} from "redux";
import {AuthRedirectComponent} from "../../hoc/WithAuthRedirect";

type MapStateToPropsType = {
    users: ResponseUserItemsType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: number[]
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    unFollowTC: (id: number) => void
    followTC: (id: number) => void

}

export type UsersPropsType = MapStateToPropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType, AppStateType> {
    constructor(props: UsersPropsType) {
        super(props);

    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render(): ReactNode {
        return (
            <>
                {this.props.isFetching ? <Preloader/>
                    : <Users
                        totalUsersCount={this.props.totalUsersCount}
                        users={this.props.users}
                        followTC={this.props.followTC}
                        currentPage={this.props.currentPage}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        isFollowing={this.props.isFollowing}
                        unFollowTC={this.props.unFollowTC}
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




export default compose<ComponentType>(
    AuthRedirectComponent,
    connect(mapStateToProps, {
        followTC,
        unFollowTC,
        getUsers
    })
)(UsersContainer)


