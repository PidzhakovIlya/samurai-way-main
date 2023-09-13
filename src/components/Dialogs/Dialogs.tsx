import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}

type MessagePropsType = {
    message:string
}

const DialogItem:React.FC <DialogItemPropsType> = ({name, id}) => {
    let path = '/dialogs/'+ id
    return(
        <div className={s.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

const Message:React.FC<MessagePropsType> = ({message}) =>{
    return(
        <div className={s.message}>{message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Ilya" id="1"/>
                <DialogItem name="Inessa" id="2"/>
                <DialogItem name="Egor" id="3"/>
                <DialogItem name="Oleg" id="4"/>
                <DialogItem name="Dimych" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="hi"/>
                <Message message="Hello"/>
                <Message message="Buy"/>
            </div>
        </div>
    )
}