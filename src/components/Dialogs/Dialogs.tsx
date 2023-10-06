import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsType = {
    state: DialogsPageType
    addMessage:()=>void
    newMessageText:(text:string)=>void
}

export const Dialogs = (props:DialogsType) => {

    let dialogsElement = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m=> <Message key={m.id} message={m.message}/>)

    let newMessage = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () =>{
        props.addMessage()
    }

    const onChangeHandler = () => {
        if (newMessage.current) props.newMessageText(newMessage.current.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElement }
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessage} onChange={onChangeHandler} value={props.state.newMessageText}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}
