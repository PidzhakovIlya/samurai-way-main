import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

export type AppRootReducerType = ReturnType<typeof RootReducer>

const RootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
})


export const store = createStore(RootReducer)

export type ReduxStoreType = typeof store

