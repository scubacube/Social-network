import {act} from "@testing-library/react";
import {usersAPI} from "../components/API/Api";

const SET_USERS = "SET-USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const IS_FETCHING = "IS_FETCHING";
const IS_FOLLOWING = "IS_FOLLOWING";

let initState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
}

export const setUserThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(isFetchingAC(true));
        usersAPI.getUsersAPI(currentPage, pageSize)
            .then(resp => {
                dispatch(isFetchingAC(false));
                dispatch(setUsersAC(resp.items));
                dispatch(setTotalUsersCountAC(resp.totalCount));
            });
    }
}

export let setUsersAC = (users) => {
    return ({
        type: SET_USERS,
        users
    })
}

export let isFetchingAC = (isFetching) => {
    return ({
        type: IS_FETCHING,
        isFetching
    })
}

export let followingAC = (userId, isFetching) => {
    return ({
        type: IS_FOLLOWING,
        userId,
        isFetching
    })
}

export let setCurrentPageAC = (currentPage) => {
    return ({
        type: SET_CURRENT_PAGE,
        currentPage
    })
}

export let setTotalUsersCountAC = (tCount) => {
    return ({
        type: SET_TOTAL_USERS_COUNT,
        totalCount: tCount
    })
}

export let followAC = (id) => {
    return ({
        type: FOLLOW,
        id: id
    })
}

export let unFollowAC = (id) => {
    return ({
        type: UNFOLLOW,
        id: id
    })
}

export let userReducer = (state = initState, action) => {
    switch (action.type) {
        case IS_FOLLOWING:
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.userId]
                    : [state.isFollowingInProgress.filter(id => id != action.userId)]
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if(e.id === action.id) {
                        return{...e, followed: true}
                    }
                    return e;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if(e.id === action.id) {
                        return{...e, followed: false}
                    }
                    return e;
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case IS_FETCHING: {
            return  {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: return state;
    }

}
