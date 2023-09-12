import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Ilya</NavLink>
                </div>
                <div className={s.dialog + ` `  + s.active}>
                    <NavLink to='/dialogs/2'>Inessa</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Egor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Oleg</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Dimych</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Buy</div>
            </div>
        </div>
    )
}