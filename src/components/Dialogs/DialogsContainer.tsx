import React from "react";
import {sendMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {AppRootReducerType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {ActionType} from "../../redux/state";



let mapStateToProps = (state:AppRootReducerType)=>{
    return{
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch:(action:ActionType)=>void)=>{
    return{
        onChangeTextarea:(text:string)=>{
            dispatch(UpdateNewMessageTextAC(text))
        },
        sendMessage: ()=>{
            dispatch(sendMessageAC())
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
