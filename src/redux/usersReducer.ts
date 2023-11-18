export type UsersReducerType = {
    users: Array<ResponseUserItemsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type ResponseUsers = {
    error: string | null
    items: Array<ResponseUserItemsType>
    totalCount: number
}

export type ResponseUserItemsType = {
    followed: boolean
    id: number
    name: string
    photos: { small: string, large: string }
    status: string | null
    uniqueUrlName: string | null
}

const initialState: UsersReducerType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export type ActionType =
    followACType
    | unFollowACType
    | usersACType
    | setCurrentPageType
    | setTotalUsersCountType
    | isFetchingACType


const usersReducer = (state: UsersReducerType = initialState, action: ActionType): UsersReducerType => {
    switch (action.type) {
        case "TOGGLE_IS_FETCHING":{
            return {...state, isFetching:action.payload.isFetching}
        }
        case "FOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)}

        }
        case "SET_USERS": {
            return {...state, users: action.payload.users}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.payload.currentPage}
        }
        case "SET_TOTAL_USERS": {
            return {...state, totalUsersCount: action.payload.totalPages}
        }
        default:
            return state
    }
}

type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
type usersACType = ReturnType<typeof setUsersAC>
type setCurrentPageType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
type isFetchingACType = ReturnType<typeof toggleIsFetchingAC>

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        payload: {
            userId,
        }
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        payload: {
            userId,

        }
    } as const
}


export const setUsersAC = (users: ResponseUserItemsType[]) => {
    return {
        type: "SET_USERS",
        payload: {
            users
        }
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: {
            currentPage
        }
    } as const
}
export const setTotalUsersCountAC = (totalPages: number) => {
    return {
        type: "SET_TOTAL_USERS",
        payload: {
            totalPages
        }
    } as const
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        payload: {
            isFetching
        }
    } as const
}

export default usersReducer;

