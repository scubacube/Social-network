import React from "react";
import {connect} from "react-redux";
import {
    isFetchingAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    followingAC, setUserThunkCreator, onChanged, follow, unfollow
} from "../../redux/UsersReducer";
import Users from "./Users";
import {usersAPI} from "../API/Api";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFollowingInProgress,
    getPageSize,
    getTotalCount, getUsers,
} from "../../redux/userSelectors";

class UsersAPI extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.setUserThunkCreator(this.props.currentPage, this.props.pageSize);
    }


    render() {
        return <Users onChanged={this.props.onChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      isFetching={this.props.isFetching}
                      isFollowingInProgress={this.props.isFollowingInProgress}
                      followingCB={this.followingCB}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
        isFetching: state.users.isFetching
    }
}

export default compose( connect( mapStateToProps, {
        follow: follow,
        unfollow: unfollow,
        setUser: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        setTotalUsersCount: setTotalUsersCountAC,
        isFetchingFunc: isFetchingAC,
        following: followingAC,
        onChanged: onChanged,
        setUserThunkCreator
    } ),
    withAuthRedirect )
( UsersAPI );
