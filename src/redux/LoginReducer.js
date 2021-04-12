// import {authAPI} from "../components/api/Api";
//
// const SEND_LOGIN = 'SEND_LOGIN';
//
// let initState = {
//     form: {
//         login: "",
//         password: ""
//     }
// }
// export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
//     authAPI.loginAPI(email, password, rememberMe).then(r => {
//         if (r.data.resultCode === 0) {
//             let {email, password, rememberMe} = r.data;
//             dispatch(sendLogin(email, password, rememberMe));
//         }
//     });
// }
//
// export const sendLogin = (form) => {
//     return ({
//         type: SEND_LOGIN,
//         form
//     })
// }
//
// export const loginReducer = (state = initState, action) => {
//     switch (action.type) {
//         case SEND_LOGIN: {
//             let stateCopy = {...state};
//             stateCopy = action.form
//
//             return stateCopy
//         }
//         default: return state;
//     }
// }