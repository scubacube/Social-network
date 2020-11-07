import {combineReducers, createStore} from "redux";
import {messagesReducer} from "./MessagesReducer";
import {profileReducer} from "./ProfileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer} from "./UsersReducer";

let reducers = combineReducers({
    dialogs: messagesReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
    users: userReducer
});

export let store = createStore(reducers);