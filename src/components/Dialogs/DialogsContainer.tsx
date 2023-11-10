import React from "react";
import {InitialStateType, sendMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapDispatchPropsType = {
    onChangeTextarea: (text: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = MapDispatchPropsType & InitialStateType

let mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onChangeTextarea: (text: string) => {
            dispatch(UpdateNewMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
