import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    isFetchingAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    followingAC, setUserThunkCreator
} from "../../redux/UsersReducer";
import Users from "./Users";
import * as axios from "axios";
import {usersAPI} from "../API/Api";


class UsersAPI extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.setUserThunkCreator(this.props.currentPage, this.props.pageSize);
    }
    onChanged = (cp) => {
        this.props.isFetchingFunc(true);
        this.props.setCurrentPage(cp);
        usersAPI.getUsersAPI(cp, this.props.pageSize).then(resp =>
        {
            this.props.isFetchingFunc(false);
            this.props.setUser(resp.items)
        });
    }

    followCB = (id) => {
        this.followingCB(id, true);
        usersAPI.followUserAPI(id).then(resp =>
        {
            if (resp.data.resultCode === 0) {
                this.props.follow(id);
            }
            this.followingCB(id, false);
        });
    }
    unfollowCB = (id) => {
        this.followingCB(id, true);
        usersAPI.unfollowUserAPI(`${id}`).then(resp =>
        {
            if (resp.data.resultCode === 0) {
                this.props.unfollow(id);
            }
            this.followingCB(id, false);
        });
    }

    followingCB = (id, s) => {
        this.props.following(id, s);
    }

    render() {
        return <Users onChanged={this.onChanged}
                      users={this.props.users}
                      followCB={this.followCB}
                      unfollowCB={this.unfollowCB}
                      totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      isFetching={this.props.isFetching}
                      isFollowingInProgress={this.props.isFollowingInProgress}
                      followingCB={this.followingCB}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        isFollowingInProgress: state.users.isFollowingInProgress
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (id) => {
//             dispatch(followAC(id));
//         },
//         unfollow: (id) => {
//             dispatch(unFollowAC(id));
//         },
//         setUser: (setU) => {
//             dispatch(setUsersAC(setU));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (tCount) => {
//             dispatch(setTotalUsersCountAC(tCount));
//         },
//         isFetchingFunc: (isF) => {
//             dispatch(isFetchingAC(isF));
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow: followAC,
    unfollow: unFollowAC,
    setUser: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    isFetchingFunc: isFetchingAC,
    following: followingAC,
    setUserThunkCreator
})(UsersAPI);
