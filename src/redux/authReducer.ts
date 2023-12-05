import {Dispatch} from "redux";
import {authApi} from "../api/api";

export type ResponseAuthType = {
    resultCode: number
    messages: []
    data: ResponseDataType
}

 export type ResponseDataType = {
     id: number
     email: string
     login: string
 }


type ActionType = setUserDataType

export type AuthStateType = ResponseDataType & {
    isAuth: boolean
}

const initialState: AuthStateType = {
        id: 2,
        email: 'blabla@bla.bla',
        login: 'samurai',
        isAuth: false
}

export const authReducer = (state = initialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state
    }
}


export type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (data: ResponseDataType) => {
    return {
        type: 'SET_USER_DATA',
        data
    } as const
}

export const getAuthUserData = () =>(dispatch:Dispatch)=>{
    authApi.me()
        .then(res => {
            console.log(res)
            if(res.data.resultCode===0)
                dispatch(setAuthUserData(res.data.data))
        })
}