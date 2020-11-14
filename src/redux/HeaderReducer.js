import {act} from "@testing-library/react";
import {authAPI} from "../components/API/Api";

const AUTH_ME = "AUTH_ME";

let initState = {
    data: {
        email: null,
        id: null,
        login: null
    },
    isSignedIn: false
}

export const authThunkCreator = () => (dispatch) => {
    authAPI.authMeAPI().then(resp =>
    {
        if (resp.data.resultCode === 0) {
            let {email, id, login} = resp.data.data
            dispatch(authMe({email, id, login}));
        }
    });
}

export const authMe = (data) => {
    return ({
        type: AUTH_ME,
        data
    });
}

export let headerReducer = (state = initState, action) => {
    switch (action.type) {
        case AUTH_ME: {
            let stateCopy = {...state};
            stateCopy.data = action.data;
            stateCopy.isSignedIn = true;
            return stateCopy;
        }
        default: return state;
    }
}
