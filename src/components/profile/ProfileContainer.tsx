import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {ResponseUserType, setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamType = {
    userId:string
}

type PropsType= RouteComponentProps<PathParamType> & ProfilePropsType

type mapStateToProps = {
    profile: ResponseUserType | null
}
type mapDispatchToProps = {
    setUserProfile: (user: ResponseUserType) => void
}

type ProfilePropsType = mapStateToProps & mapDispatchToProps


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId) userId = '2'

        axios.get<ResponseUserType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return <div>
            <Profile profile={this.props.profile}
            />
        </div>

    }
}

const mapStateToProps = (state: AppStateType):mapStateToProps => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent=  withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)

