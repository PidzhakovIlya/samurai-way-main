import {ActionType, DialogsPageType} from "./state";

export type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newText: string
}
export type sendMessageActionType = {
    type: "SEND-MESSAGE"
}

// type ActionType = UpdateNewMessageTextActionType | sendMessageActionType;

const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
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

export const UpdateNewMessageTextAC = (newText: string): UpdateNewMessageTextActionType =>
    ({type: "UPDATE-NEW-MESSAGE-TEXT", newText: newText} as const)

export const sendMessageAC = (): sendMessageActionType => ({type: "SEND-MESSAGE"} as const)
