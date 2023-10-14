import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, DialogsPageType} from "../../redux/state";
import {sendMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogsReducer";


type DialogsType = {
    state: DialogsPageType
    addMessage:()=>void
    newMessageText:(text:string)=>void
    dispatch: (action: ActionType) => void
}

export const Dialogs = (props:DialogsType) => {

    let dialogsElement = props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m=> <Message key={m.id} message={m.message}/>)
    let newMessageText = props.state.newMessageText

    // let newMessage = React.createRef<HTMLTextAreaElement>()

    const onSendMessage = () =>{
        props.dispatch(sendMessageAC())
        // props.addMessage()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // if (newMessage.current) props.dispatch(UpdateNewMessageTextAC(newMessage.current.value))
        props.dispatch(UpdateNewMessageTextAC(e.currentTarget.value))
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
                <textarea onChange={onChangeHandler} value={newMessageText}></textarea>
                <button onClick={onSendMessage}>Send</button>
            </div>
        </div>
    )
}
