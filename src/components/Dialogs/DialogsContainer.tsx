import {ComponentType} from "react";
import {InitialStateType, sendMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AuthRedirectComponent} from "../../hoc/WithAuthRedirect";


type MapDispatchPropsType = {
    onChangeTextarea: (text: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = MapDispatchPropsType & InitialStateType & {isAuth:boolean}

let mapStateToProps = (state: AppStateType): InitialStateType & {isAuth:boolean} => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
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




export const DialogsContainer = compose<ComponentType>(
    AuthRedirectComponent,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)

