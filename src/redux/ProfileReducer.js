import {authAPI, profileAPI} from "../components/API/Api";
import {act} from "@testing-library/react";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SEND_LOGIN = 'SEND_LOGIN';

let initState = {
    posts: [
        {id: 1, postText: "first", likeCount: 10},
        {id: 2, postText: "second", likeCount: 10},
        {id: 3, postText: "third", likeCount: 10},
        {id: 4, postText: "fourth", likeCount: 10},
        {id: 5, postText: "fifth", likeCount: 10}
    ],
    newPostText: "enter some text here...",
    prof: null,
    status: "write here something...",
    login: {
        login: "",
        password: ""
    }
}

export const setProfileThunkCreator = (userId) => (dispatch) => {
    profileAPI.setProfileAPI(userId).then(resp =>
    {
        dispatch(setProfile(resp.data));
    });
}

export const setStatusThunkCreator = (userId) => (dispatch) => {
    if (!userId) {
        userId = 2;
    }
    profileAPI.setStatusAPI(userId).then(r => {
        dispatch(setStatus(r.data))
    });
}

export const updateStatusThunkCreator = (status) => (dispatch) => {
    profileAPI.updateStatusAPI(status).then(r => {
        if (r.data.resultCode === 0) {
            dispatch(setStatus(status))
        }

    });
}

export const addPostAC = (post) => {
    return (
        {
            type: ADD_POST,
            post
        }
    );
}
export const setStatus = (status) => {
    return ({
        type: SET_STATUS,
        status
    });
}

export const sendLogin = (login) => {
    return ({
        type: SEND_LOGIN,
        login
    })
}

export const setProfile = (profile) => {
    return ({
       type: SET_PROFILE,
        profile
    });
}

export const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 10,
                postText: action.post,
                likeCount: 0
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);

            return stateCopy;
        }
        case SET_PROFILE: {
            let stateCopy = {...state};
            stateCopy.prof = action.profile;

            return stateCopy;
        }
        case SET_STATUS: {
            let stateCopy = {...state};
            stateCopy.status = action.status;

            return stateCopy;
        }
        default: return state;
    }
}