import {combineReducers, createStore} from "redux";
import {messagesReducer} from "./MessagesReducer";
import {profileReducer} from "./ProfileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer} from "./UsersReducer";
import {headerReducer} from "./HeaderReducer";

let reducers = combineReducers({
    dialogs: messagesReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
    users: userReducer,
    auth: headerReducer
});

export let store = createStore(reducers);

window.store = store;