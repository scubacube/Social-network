import {applyMiddleware, combineReducers, createStore} from "redux";
import {messagesReducer} from "./MessagesReducer";
import {profileReducer} from "./ProfileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer} from "./UsersReducer";
import {headerReducer} from "./HeaderReducer";
import thunkMW from "redux-thunk";

let reducers = combineReducers({
    dialogs: messagesReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
    users: userReducer,
    auth: headerReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMW));

window.store = store;