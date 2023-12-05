import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainer";

export const Header = (props:HeaderContainerPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.app}>
                <img src="https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png"
                     alt=""/>
            </div>
            <div className={s.loginBlock}>

                {props.isAuth?<span>{props.login}</span>:<NavLink className={s.linkLogin} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

