import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

export type AppStateType = ReturnType<typeof RootReducer>

const RootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
})


export const store = createStore(RootReducer)

// // TS-IGNORE
// window.store= store
export type ReduxStoreType = typeof store

