import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className={s.navigation_app}>
            <ul>
                <li className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

