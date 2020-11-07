import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    isFetchingAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/UsersReducer";
import Users from "./Users";
import * as axios from "axios";



class UsersAPI extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.isFetchingFunc(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`).then(resp =>
        {
            this.props.isFetchingFunc(false);
            this.props.setUser(resp.data.items);
            this.props.setTotalUsersCount(resp.data.totalCount)
        });
    }
    onChanged = (cp) => {
        this.props.isFetchingFunc(true);
        this.props.setCurrentPage(cp);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${cp}
        &count=${this.props.pageSize}`).then(resp =>
        {
            this.props.isFetchingFunc(false);
            this.props.setUser(resp.data.items)
        });
    }
    followCB = (id) => {
        this.props.follow(id);
    }
    unfollowCB = (id) => {
        this.props.unfollow(id);
    }
    render() {
        return <Users onChanged={this.onChanged}
                      users={this.props.users}
                      followCB={this.followCB}
                      unfollowCB={this.unfollowCB}
                      totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      isFetching={this.props.isFetching}/>
    }
}

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
        },
        isFetchingFunc: (isF) => {
            dispatch(isFetchingAC(isF));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);
