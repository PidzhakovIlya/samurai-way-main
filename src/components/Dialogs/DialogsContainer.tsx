import React from "react";
import {sendMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {ReduxStoreType} from "../../redux/reduxStore";


type DialogsType = {
    store: ReduxStoreType
}

export const DialogsContainer = (props: DialogsType) => {
    let dialogsPage = props.store.getState().dialogsPage

    const onSendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onChangeHandler = (text: string) => {
        props.store.dispatch(UpdateNewMessageTextAC(text))
    }
    return (
        <Dialogs dialogs={dialogsPage.dialogs} messages={dialogsPage.messages} onChangeTextarea={onChangeHandler}
                 sendMessage={onSendMessage}
                 newMessageText={dialogsPage.newMessageText}
        />
    )
}
