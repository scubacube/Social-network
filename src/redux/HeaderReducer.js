import {act} from "@testing-library/react";

const AUTH_ME = "AUTH_ME";

let initState = {
    data: {
        email: null,
        id: null,
        login: null
    },
    isSignedIn: false
}

export const authMeAC = (data) => {
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
