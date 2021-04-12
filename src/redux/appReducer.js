import {act} from "@testing-library/react";
import {authAPI} from "../components/api/Api";
import {stopSubmit} from "redux-form";
import {authThunkCreator} from "./HeaderReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initState = {
    initialized: false
}

export const initializedSuccessAC = () => {
    return ({
        type: INITIALIZED_SUCCESS
    });
}

export const initializeAppThunkCreator = () => (dispatch) => {
    let promise = dispatch(authThunkCreator());
    promise.then( () => {
        dispatch(initializedSuccessAC());
    } )
}

export let appReducer = (state = initState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default: return state;
    }
}
