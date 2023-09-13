import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
    id?: number
}

const DialogItem: React.FC<DialogItemPropsType> = ({name, id}) => {
    let path = '/dialogs/' + id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessagePropsType> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}


export const Dialogs = () => {
    const dialogsData = [
        {id: 1, name: "Ilya"},
        {id: 2, name: "Inessa"},
        {id: 3, name: "Egor"},
        {id: 4, name: "Oleg"},
        {id: 5, name: "Dimych"}
    ]
    const messagesData = [
        {id: 1, message: "hi"},
        {id: 2, message: "hey"},
        {id: 3, message: "hello"},
        {id: 4, message: "Day 30"},
        {id: 5, message: "Dimych"}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(el => {
                        return (
                            <DialogItem key={el.id} name={el.name} id={el.id}/>
                        )
                    })
                }
            </div>
            <div className={s.messages}>
                {messagesData.map(el=><Message key={el.id} message={el.message}/>)}
                {/*<Message message="hi"/>*/}
                {/*<Message message="Hello"/>*/}
                {/*<Message message="Buy"/>*/}
            </div>
        </div>
    )
}