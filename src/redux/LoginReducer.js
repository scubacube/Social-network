import {authAPI} from "../components/API/Api";

const SEND_LOGIN = 'SEND_LOGIN';

let initState = {
    form: {
        login: "",
        password: ""
    }
}
export const loginThunkCreator = (form) => (dispatch) => {
    authAPI.loginAPI(form).then(r => {
        dispatch(sendLogin(r.data))
    });
}

export const sendLogin = (form) => {
    return ({
        type: SEND_LOGIN,
        form
    })
}

export const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_LOGIN: {
            let stateCopy = {...state};
            stateCopy = action.form

            return stateCopy
        }
        default: return state;
    }
}