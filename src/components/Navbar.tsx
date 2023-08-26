import React from 'react';
import s from './Navbar.module.css'


export const Navbar = () => {
    return (
        <nav className={s.navigation_app}>
            <ul>
                <li className={`${s.item} ${s.active}`}><a href="">Profile</a></li>
                <li className={s.item}><a href="">Message</a></li>
                <li className={s.item}><a href="">News</a></li>
                <li className={s.item}><a href="">Music</a></li>
                <li className={s.item}><a href="">Settings</a></li>
            </ul>
        </nav>
    );
};

