import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {messagesReducer} from "./MessagesReducer";
import {profileReducer} from "./ProfileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer} from "./UsersReducer";
import {headerReducer} from "./HeaderReducer";
import thunkMW from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./appReducer";

let reducers = combineReducers({
    dialogs: messagesReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
    users: userReducer,
    auth: headerReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMW)));

window.store = store;