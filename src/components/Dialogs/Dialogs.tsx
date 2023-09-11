import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Ilya
                </div>
                <div className={s.dialog + ` `  + s.active}>
                    Inessa
                </div>
                <div className={s.dialog}>
                    Egor
                </div>
                <div className={s.dialog}>
                    Oleg
                </div>
                <div className={s.dialog}>
                    Dimych
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