import {ActionType, DialogsPageType} from "./state";

export type UpdateNewMessageTextActionType = ReturnType<typeof UpdateNewMessageTextAC>
export type SendMessageActionType = ReturnType<typeof sendMessageAC>


const initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: "Ilya"},
        {id: 2, name: "Inessa"},
        {id: 3, name: "Egor"},
        {id: 4, name: "Oleg"},
        {id: 5, name: "Dimych"}
    ],

    messages: [
        {id: 1, message: "hi"},
        {id: 2, message: "hey"},
        {id: 3, message: "hello"},
        {id: 4, message: "Day 30"},
        {id: 5, message: "Dimych"}
    ],
    newMessageText: "ss"
}


const dialogsReducer = (state=initialState, action: ActionType): DialogsPageType=> {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT": {
            state.newMessageText = action.newText;
            return {...state}
        }
        case "SEND-MESSAGE": {
            const newMessage = {id: 1, message: state.newMessageText}
            return {...state, messages : [...state.messages, newMessage ], newMessageText: '' }
        }
        default:
            return state
    }
}

export default dialogsReducer;

export const UpdateNewMessageTextAC = (newText: string) =>
    ({type: "UPDATE-NEW-MESSAGE-TEXT", newText: newText} as const)

export const sendMessageAC = () => ({type: "SEND-MESSAGE"} as const)
