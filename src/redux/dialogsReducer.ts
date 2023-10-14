import {ActionType, DialogsPageType} from "./state";
import {updateNewPostTextAC} from "./profileReducer";

export type UpdateNewMessageTextActionType = ReturnType<typeof UpdateNewMessageTextAC>
export type SendMessageActionType = ReturnType<typeof sendMessageAC>


const dialogsReducer = (state: DialogsPageType, action: ActionType): DialogsPageType=> {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT": {
            state.newMessageText = action.newText;
            return {...state}
        }
        case "SEND-MESSAGE": {
            const newMessage = {id: 1, message: state.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = ""
            return {...state}
        }
        default:
            return state
    }
}

export default dialogsReducer;

export const UpdateNewMessageTextAC = (newText: string) =>
    ({type: "UPDATE-NEW-MESSAGE-TEXT", newText: newText} as const)

export const sendMessageAC = () => ({type: "SEND-MESSAGE"} as const)
