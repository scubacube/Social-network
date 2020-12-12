import {act} from "@testing-library/react";
import {authAPI} from "../components/API/Api";
import {stopSubmit} from "redux-form";

const AUTH_ME = "AUTH_ME";
const SEND_LOGIN = 'SEND_LOGIN';

let initState = {
    data: {
        email: null,
        id: null,
        login: null
    },
    isSignedIn: false
}
export const authThunkCreator = () => async (dispatch) => {
    const resp = await authAPI.authMeAPI();
    if ( resp.data.resultCode === 0 ) {
        const {email, id, login} = resp.data.data
        dispatch( authMe( email, id, login, true ) );
    }
}

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
   const r = await authAPI.loginAPI(email, password, rememberMe)
    if ( r.data.resultCode === 0 ) {
        dispatch( authThunkCreator() );
    } else {
        let messageError = r.data.messages.length > 0 ? r.data.messages[0] : "some error";
        dispatch( stopSubmit( "login", {_error: messageError} ) );
    }
}

export const logoutThunkCreator = () => async (dispatch) => {
    const r = await authAPI.logoutAPI()
    if ( r.data.resultCode === 0 ) {
        dispatch( authMe( null, null, null, false ) );
    }
}

export const authMe = (email, id, login, isSignedIn) => {
    return ({
        type: AUTH_ME,
        data: {email, id, login, isSignedIn}
    });
}

export const sendLogin = (form) => {
    return ({
        type: SEND_LOGIN,
        form
    })
}

export let headerReducer = (state = initState, action) => {
    switch (action.type) {
        case AUTH_ME: {
            let stateCopy = {...state};
            stateCopy.data = action.data;
            stateCopy.isSignedIn = action.data.isSignedIn;
            return stateCopy;
        }
        case SEND_LOGIN: {
            let stateCopy = {...state};
            stateCopy = action.form

            return stateCopy
        }
        default: return state;
    }
}
