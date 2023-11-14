

export type UsersReducerType = {
    users: Array<ResponseUserItemsType>
}

export type ResponseUsers= {
    error:string | null
    items:Array<ResponseUserItemsType>
    totalCount:number
}

export type ResponseUserItemsType = {
    followed :boolean
    id:number
    name:string
    photos:{small: string, large: string}
    status:string | null
    uniqueUrlName: string | null
}

const initialState: UsersReducerType = {
    users: [

    ]
}

export type ActionType = followACType | unFollowACType | usersACType


const usersReducer = (state:UsersReducerType = initialState, action: ActionType): UsersReducerType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users:state.users.map(u=>u.id===action.payload.userId? {...u, followed: true}: u)}
        }
        case "UNFOLLOW": {
            return {...state, users:state.users.map(u=>u.id===action.payload.userId? {...u, followed: false}: u)}

        }
        case "SET_USERS":{
            return {...state, users:[...state.users, ...action.payload.users]}
        }
        default:
            return state
    }
}

type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
type usersACType = ReturnType<typeof setUsersAC>

export const followAC = (userId:number) => {
    return {
        type: "FOLLOW",
        payload: {
            userId,
        }
    } as const
}
export const unFollowAC = (userId:number) => {
    return {
        type: "UNFOLLOW",
        payload: {
            userId,

        }
    } as const
}


export const setUsersAC = (users:ResponseUserItemsType[]) => {
    return {
        type: "SET_USERS",
        payload: {
           users
        }
    } as const
}

export default usersReducer;

