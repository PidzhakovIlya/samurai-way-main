
export type StateType = {
    profilePage:ProfilePageType,
    dialogsPage:DialogsPageType
}
export type ProfilePageType = {
    posts: PostType[]
}
export type DialogsPageType = {
    dialogs:DialogType[],
    messages: MessageType[]
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
    id?:number
    message:string
}
export let state:StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi,how are your?", likeCount: 3},
            {id: 2, message: "it`s my first post", likeCount: 15},
            {id: 3, message: "hello", likeCount: 6},
            {id: 4, message: "Day 30", likeCount: 654},
            {id: 5, message: "Dimych", likeCount: 55}
        ]
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
        ]
    }
}

