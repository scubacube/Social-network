import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from "../../redux/UsersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.users,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id));
        },
        unfollow: (id) => {
            dispatch(unFollowAC(id));
        },
        setUser: (setU) => {
            dispatch(setUsersAC(setU));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (tCount) => {
            dispatch(setTotalUsersCountAC(tCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
