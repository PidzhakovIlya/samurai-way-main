import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import {authReducer} from "./authReducer";

export type AppStateType = ReturnType<typeof RootReducer>

const RootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})


export const store = createStore(RootReducer)

// @ts-ignore
 window.store= store
export type ReduxStoreType = typeof store

