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

type followACType = ReturnType<typeof follow>
type unFollowACType = ReturnType<typeof unFollow>
type usersACType = ReturnType<typeof setUsers>
type setCurrentPageType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type isFetchingACType = ReturnType<typeof toggleIsFetching>

export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        payload: {
            userId,
        }
    } as const
}
export const unFollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        payload: {
            userId,

        }
    } as const
}


export const setUsers = (users: ResponseUserItemsType[]) => {
    return {
        type: "SET_USERS",
        payload: {
            users
        }
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: {
            currentPage
        }
    } as const
}
export const setTotalUsersCount = (totalPages: number) => {
    return {
        type: "SET_TOTAL_USERS",
        payload: {
            totalPages
        }
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        payload: {
            isFetching
        }
    } as const
}

export default usersReducer;

