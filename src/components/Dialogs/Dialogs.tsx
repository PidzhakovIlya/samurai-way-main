import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";

export type DialogType = {
    name: string
    id: number
}
type DialogsPropsType = {
    messages: MessageType[]
    dialogs:  DialogType[]
}

export const Dialogs = (props:DialogsPropsType) => {


    let dialogsElement = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m=> <Message key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElement }
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
