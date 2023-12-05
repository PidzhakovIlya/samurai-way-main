import React from 'react';
import {Header} from "./Header";
import {getAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";

export type HeaderContainerPropsType = MapStatePropsType & {
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

type MapStatePropsType = {
    isAuth: boolean
    login: string
}

function mapStateToProps(state: AppStateType):MapStatePropsType {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)
