import {act} from "@testing-library/react";
import {authAPI, securityPI} from "../components/api/Api";
import {stopSubmit} from "redux-form";

const AUTH_ME = "AUTH_ME";
const SEND_LOGIN = 'SEND_LOGIN';
const GET_CAPTCHA_URL_SUCCESS =  'GET_CAPTCHA_URL_SUCCESS';

let initState = {
    data: {
        email: null,
        id: null,
        login: null,

    },
    isSignedIn: false,
    captchaUrl: null // if null then captcha isn't required
}
export const authThunkCreator = () => async (dispatch) => {
    const resp = await authAPI.authMeAPI();
    if ( resp.data.resultCode === 0 ) {
        const {email, id, login} = resp.data.data
        dispatch( authMe( email, id, login, true ) );
    }
}

export const loginThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {

   const r = await authAPI.loginAPI(email, password, rememberMe, captcha);
   debugger
   if ( r.data.resultCode === 0 ) {
        dispatch( authThunkCreator() );
   } else {
        if (r.data.resultCode === 10) {
            dispatch(getCaptchaUrlThunkCreator());
        } else {
            let messageError = r.data.messages.length > 0 ? r.data.messages[0] : "some error";
            dispatch( stopSubmit( "login", {_error: messageError} ) );
        }
   }
}

export const getCaptchaUrlThunkCreator = () => async (dispatch) => {
    debugger
    const r = await securityPI.getCaptchaUrlAPI()
    const captchaUrl = r.data.url;
    dispatch(getCaptchaUrl(captchaUrl));
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

export const getCaptchaUrl = (payload) => {
    return ({
        type: GET_CAPTCHA_URL_SUCCESS,
        payload
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
            stateCopy = action.form;
            return stateCopy;
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            let stateCopy = {...state};
            stateCopy.captchaUrl = action.payload;
            debugger
            return stateCopy
        }
        default: return state;
    }
}
