import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {getUserProfile, ResponseUserType} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AuthRedirectComponent} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamType = {
    userId:string
}

type PropsType= RouteComponentProps<PathParamType> & ProfilePropsType

type mapStateToProps = {
    profile: ResponseUserType | null
}
type mapDispatchToProps = {
    getUserProfile: (user: string) => void
}

type ProfilePropsType = mapStateToProps & mapDispatchToProps


class ProfileContainer extends React.Component<PropsType> {
constructor(props:PropsType) {
    super(props);
}
    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId) userId = '2'
        this.props.getUserProfile(userId)
        // axios.get<ResponseUserType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        //     .then(res => {
        //         this.props.setUserProfile(res.data)
        //     })
    }

    render() {

        return <div>
            <Profile profile={this.props.profile}
            />
        </div>

    }
}

const mapStateToProps = (state: AppStateType):mapStateToProps => ({
    profile: state.profilePage.profile,
})

export default compose<ComponentType>(
    connect(mapStateToProps, { getUserProfile}),
    withRouter,
    // AuthRedirectComponent,
)(ProfileContainer)



