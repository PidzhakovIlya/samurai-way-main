import React from 'react';
import {Header} from "./Header";
import {AuthStateType, setAuth} from "../../redux/authReducer";
import {connect} from "react-redux";

export type HeaderContainerPropsType = MapStatePropsType & {
    setAuth: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.setAuth()
        // axios.get<ResponseAuthType>('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials:true})
        //     .then(res => {
        //        if(res.data.resultCode===0)
        //       this.props.setAuthUserData(res.data.data)
        //     })
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

function mapStateToProps(state: AuthStateType) {
    return {
        isAuth: state.isAuth,
        login: state.login
    }
}

export default connect(mapStateToProps, {setAuth})(HeaderContainer)
