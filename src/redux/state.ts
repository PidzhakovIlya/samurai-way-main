import profileReducer, {AddPostActionType, UpdateNewPostTextActionType} from "./profileReducer";
import dialogsReducer, {SendMessageActionType, UpdateNewMessageTextActionType} from "./dialogsReducer";

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogType[],
    messages: MessageType[]
    newMessageText: string
}
export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type DialogType = {
    name: string
    id: number
}
export type MessageType = {
    id?: number
    message: string
}

export type ActionType = AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageTextActionType
    | SendMessageActionType;

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType,
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi,how are your?", likeCount: 3},
                {id: 2, message: "it`s my first post", likeCount: 15},
                {id: 3, message: "hello", likeCount: 6},
                {id: 4, message: "Day 30", likeCount: 654},
                {id: 5, message: "Dimych", likeCount: 55}
            ],
            newPostText: "Haaa"
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
    // addPost() {
    //     const newPost: PostType = {
    //         id: new Date().getTime(),
    //         message: this._state.profilePage.newPostText,
    //         likeCount: 55
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = "";
    //     this._callSubscriber()
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber()
    // },
    // addMessage() {
    //     const newMessage: MessageType = {
    //         id: new Date().getTime(),
    //         message: this._state.dialogsPage.newMessageText,
    //     }
    //     this._state.dialogsPage.messages.push(newMessage)
    //     this._state.dialogsPage.newMessageText = "";
    //     this._callSubscriber()
    // },
    // newMessageText(newText: string) {
    //     this._state.dialogsPage.newMessageText = newText
    //     this._callSubscriber()
    // },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    }

}
