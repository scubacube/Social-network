import {createSelector} from "reselect";

export const getUsers = state => {
    return state.users.users;
}

export const getUsersSelector = createSelector(getUsers, (s) => {
    return s.filter(u => true);
});

export const getPageSize = state => {
    return state.users.pageSize;
}

export const getTotalCount = state => {
    return state.users.totalCount
}

export const getCurrentPage = state => {
    return state.users.currentPage
}

export const getIsFollowingInProgress = state => {
    return state.users.isFollowingInProgress;
}