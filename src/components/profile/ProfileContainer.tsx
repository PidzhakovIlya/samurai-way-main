import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {ResponseUserType, getUserProfile} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamType = {
    userId:string
}

type PropsType= RouteComponentProps<PathParamType> & ProfilePropsType

type mapStateToProps = {
    profile: ResponseUserType | null
    isAuth:boolean
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
        if(!this.props.isAuth) return <Redirect to={"/login"}/>
        return <div>
            <Profile profile={this.props.profile}
            />
        </div>

    }
}

const mapStateToProps = (state: AppStateType):mapStateToProps => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent=  withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile})(WithUrlDataContainerComponent)

