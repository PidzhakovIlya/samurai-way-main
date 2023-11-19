import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {ResponseUserType, setUserProfile} from "../../redux/profileReducer";

type mapStateToProps = {
    profile: ResponseUserType | null
}
type mapDispatchToProps = {
    setUserProfile: (user: ResponseUserType) => void
}

type ProfilePropsType = mapStateToProps & mapDispatchToProps


class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {
        axios.get<ResponseUserType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)

