import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {isAuth: state.auth.isAuth}
}

export function AuthRedirectComponent<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: any) {
        let {isAuth, ...resProps} = props
        if (!isAuth) return <Redirect to="/login"/>

        return <Component {...resProps as T}/>

    }

    let ConnectedRedirectComponent = connect(mapStateToProps, {})(RedirectComponent)
    return ConnectedRedirectComponent
}