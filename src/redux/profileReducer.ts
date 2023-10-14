import {ActionType, PostType, ProfilePageType} from "./state";


export type AddPostActionType = ReturnType<typeof addPostAC>

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>


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

export const addPostAC = () => ({type: "ADD-POST"} as const)

export const updateNewPostTextAC = (newText: string) =>
    ({type: "UPDATE-NEW-POST-TEXT", newText: newText} as const)