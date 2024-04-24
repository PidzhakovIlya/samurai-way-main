import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {getStatus, getUserProfile, ResponseUserType, updateStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AuthRedirectComponent} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & ProfilePropsType

type mapStateToProps = {
    profile: ResponseUserType | null
    status: string | null
}
type mapDispatchToProps = {
    getUserProfile: (user: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string | null) => void
}

type ProfilePropsType = mapStateToProps & mapDispatchToProps


class ProfileContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) userId = "30136"
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return <div>
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        </div>

    }
}

const mapStateToProps = (state: AppStateType): mapStateToProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // AuthRedirectComponent,
)(ProfileContainer)



