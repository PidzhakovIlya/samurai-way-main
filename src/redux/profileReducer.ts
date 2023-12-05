import {Dispatch} from "redux";
import axios from "axios";
import {usersApi} from "../api/api";


export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profile: null | ResponseUserType
}

export type ResponseUserType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string| undefined,
        "website": string | undefined,
        "vk": string | undefined,
        "twitter": string | undefined,
        "instagram": string | undefined,
        "youtube": string | undefined,
        "github": string | undefined,
        "mainLink": string | undefined
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string | undefined,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string | undefined,
        "large": string | undefined
    }
}

export type ActionType = AddPostActionType | UpdateNewPostTextActionType | setUserProfileActionType

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type setUserProfileActionType = ReturnType<typeof setUserProfile>


const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi,how are your?", likeCount: 3},
        {id: 2, message: "it`s my first post", likeCount: 15},
        {id: 3, message: "hello", likeCount: 6},
        {id: 4, message: "Day 30", likeCount: 654},
        {id: 5, message: "Dimych", likeCount: 55}
    ],
    newPostText: "Haaa",
    profile: null
}

const profileReducer = (state:ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "SET_USER_PROFILE":{
            return {...state, profile:action.profile }
        }
        case "ADD-POST": {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCount: 55
            }
            return {...state, posts: [newPost, ...state.posts ], newPostText:''}
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText:action.newText}

        }
        default:
            return state
    }
}

export default profileReducer;

export const addPostAC = () => ({type: "ADD-POST"} as const)

export const updateNewPostTextAC = (newText: string) =>
    ({type: "UPDATE-NEW-POST-TEXT", newText: newText} as const)

export const setUserProfile = (profile: ResponseUserType) =>
    ({type: "SET_USER_PROFILE", profile} as const)

export const getUserProfile = (userId:string) =>(dispatch: Dispatch)=>{
    usersApi.getProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res.data))
        })
}