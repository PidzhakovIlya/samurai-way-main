import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.app}>
                <img src="https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png"
                     alt=""/>
            </div>
        </header>
    );
};

