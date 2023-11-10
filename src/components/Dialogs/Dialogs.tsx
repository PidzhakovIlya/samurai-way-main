import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs = (props: DialogsPropsType) => {
debugger
    let dialogsElement = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageText = props.newMessageText

    const onSendMessage = () => {
        props.sendMessage()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeTextarea(e.currentTarget.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onChangeHandler} value={newMessageText}></textarea>
                <button onClick={onSendMessage}>Send</button>
            </div>
        </div>
    )
}
