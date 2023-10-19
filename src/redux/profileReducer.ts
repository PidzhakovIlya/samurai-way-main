import {ActionType, PostType, ProfilePageType} from "./state";


export type AddPostActionType = ReturnType<typeof addPostAC>

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>


const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi,how are your?", likeCount: 3},
        {id: 2, message: "it`s my first post", likeCount: 15},
        {id: 3, message: "hello", likeCount: 6},
        {id: 4, message: "Day 30", likeCount: 654},
        {id: 5, message: "Dimych", likeCount: 55}
    ],
    newPostText: "Haaa"
}

const profileReducer = (state = initialState, action: ActionType): ProfilePageType => {
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
        default:
            return state
    }
}

export default profileReducer;

export const addPostAC = () => ({type: "ADD-POST"} as const)

export const updateNewPostTextAC = (newText: string) =>
    ({type: "UPDATE-NEW-POST-TEXT", newText: newText} as const)