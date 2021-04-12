import {act} from "@testing-library/react";
import {profileAPI, usersAPI} from "../components/api/Api";
import {setProfile} from "./ProfileReducer";
import {updateObjectInArray} from "../utils/object-helpers";

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

    return async (dispatch) => {
        dispatch( isFetchingAC( true ) );
        const resp = await usersAPI.getUsersAPI( currentPage, pageSize );
        dispatch( isFetchingAC( false ) );
        dispatch( setUsersAC( resp.items ) );
        dispatch( setTotalUsersCountAC( resp.totalCount ) );
    }
}

export const setUsersAC = (users) => {
    return ({
        type: SET_USERS,
        users
    })
}

export const isFetchingAC = (isFetching) => {
    return ({
        type: IS_FETCHING,
        isFetching
    })
}

export const followingAC = (userId, isFetching) => {
    return ({
        type: IS_FOLLOWING,
        userId,
        isFetching
    })
}

export const setCurrentPageAC = (currentPage) => {
    return ({
        type: SET_CURRENT_PAGE,
        currentPage
    })
}

export const setTotalUsersCountAC = (tCount) => {
    return ({
        type: SET_TOTAL_USERS_COUNT,
        totalCount: tCount
    })
}

export const followAC = (id) => {
    return ({
        type: FOLLOW,
        id: id
    })
}

export const unFollowAC = (id) => {
    return ({
        type: UNFOLLOW,
        id: id
    })
}

export const onChanged = (cp, pageSize) => async (dispatch) => {
    dispatch(isFetchingAC( true ));
    dispatch(setCurrentPageAC( cp ));
    const resp = await usersAPI.getUsersAPI( cp, pageSize )
    dispatch(isFetchingAC( false ));
    dispatch(setUsersAC( resp.items ));
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actCreator) => {
    dispatch(followingAC( id, true ));
    const resp = await apiMethod( id );
    if ( resp.data.resultCode === 0 ) {
        dispatch(actCreator( id ));
    }
    dispatch(followingAC( id, false ));
}

export const follow = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.followUserAPI.bind(usersAPI), followAC);
}

export const unfollow = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.unfollowUserAPI.bind(usersAPI), unFollowAC);
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
                users: updateObjectInArray(
                    action.id,
                    state.users,
                    "id",
                    {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(
                    action.id,
                    state.users,
                    "id",
                    {followed: false})
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
