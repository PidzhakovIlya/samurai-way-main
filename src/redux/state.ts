

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

export type StoreType = {
    _state: RootStateType
    getState:()=> RootStateType ,
    _callSubscriber:()=>void
    addPost:()=>void
    updateNewPostText:(newText: string)=>void
    addMessage:()=>void
    newMessageText:(newText: string)=>void
    subscribe:(observer: () => void)=>void
}

export let store:StoreType = {
    _state:  {
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
    getState(){
        return this._state
    },
    _callSubscriber ()  {
    },
    addPost ()  {
        debugger
        const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likeCount: 55
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = "";
        this._callSubscriber()
    },
    updateNewPostText  (newText: string)  {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber()
    },
    addMessage ()  {
        const newMessage: MessageType = {
            id: new Date().getTime(),
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber()
    },
    newMessageText (newText: string)  {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber()
    },
    subscribe  (observer)  {
        this._callSubscriber = observer
    }
}

// export let state: StateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: "Hi,how are your?", likeCount: 3},
//             {id: 2, message: "it`s my first post", likeCount: 15},
//             {id: 3, message: "hello", likeCount: 6},
//             {id: 4, message: "Day 30", likeCount: 654},
//             {id: 5, message: "Dimych", likeCount: 55}
//         ],
//         newPostText: "Haaa"
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: "Ilya"},
//             {id: 2, name: "Inessa"},
//             {id: 3, name: "Egor"},
//             {id: 4, name: "Oleg"},
//             {id: 5, name: "Dimych"}
//         ],
//
//         messages: [
//             {id: 1, message: "hi"},
//             {id: 2, message: "hey"},
//             {id: 3, message: "hello"},
//             {id: 4, message: "Day 30"},
//             {id: 5, message: "Dimych"}
//         ],
//         newMessageText: "ss"
//     }
// }
//
// export const addPost = () => {
//     const newPost: PostType = {
//         id: new Date().getTime(),
//         message: state.profilePage.newPostText,
//         likeCount: 55
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = "";
//     rerenderEntireTree()
// }
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree()
// }
// export const addMessage = () => {
//     const newMessage: MessageType = {
//         id: new Date().getTime(),
//         message: state.dialogsPage.newMessageText,
//
//     }
//     state.dialogsPage.messages.push(newMessage)
//     state.dialogsPage.newMessageText = "";
//     rerenderEntireTree()
// }
// export const newMessageText = (newText: string) => {
//     state.dialogsPage.newMessageText = newText
//     rerenderEntireTree()
// }
// export const subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer
// }
