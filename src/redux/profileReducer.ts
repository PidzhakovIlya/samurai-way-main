import {ActionType, PostType, ProfilePageType} from "./state";


export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

// type ActionType = AddPostActionType | UpdateNewPostTextActionType

 const profileReducer = (state: ProfilePageType, action:ActionType):ProfilePageType=>{
    switch (action.type) {
        case "ADD-POST": {
           const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCount: 55
            }
            state.posts.push(newPost)
            state.newPostText = "";
            return {...state}
        }
        case "UPDATE-NEW-POST-TEXT": {
             state.newPostText = action.newText;
             return {...state}

        }
        default: return state
    }
}

export default profileReducer;

export const addPostAC = (): AddPostActionType => ({type: "ADD-POST"} as const)

export const updateNewPostTextAC = (newText: string): UpdateNewPostTextActionType =>
    ({type: "UPDATE-NEW-POST-TEXT", newText: newText} as const)