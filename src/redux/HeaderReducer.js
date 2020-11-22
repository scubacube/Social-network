import {act} from "@testing-library/react";
import {authAPI} from "../components/API/Api";

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
// let initState = {
//     form: {
//         login: "",
//         password: ""
//     }
// }
export const authThunkCreator = () => (dispatch) => {
    authAPI.authMeAPI().then(resp =>
    {
        if (resp.data.resultCode === 0) {
            let {email, id, login} = resp.data.data
            dispatch(authMe(email, id, login, true));
        }
    });
}
export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
    authAPI.loginAPI(email, password, rememberMe).then(r => {
        if (r.data.resultCode === 0) {
            let {email, password, rememberMe} = r.data;
            // dispatch(sendLogin(email, password, rememberMe));
            dispatch(authThunkCreator());
        }
    });
}

export const logoutThunkCreator = () => (dispatch) => {
    authAPI.logoutAPI().then(r => {
        if (r.data.resultCode === 0) {
            let {email, password, rememberMe} = r.data;
            // dispatch(sendLogin(email, password, rememberMe));
            dispatch(authMe(null, null, null, false));
        }
    });
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
