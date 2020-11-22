import React from 'react';
import Profile from './Profile';
import {onPostChangeAC, addPostAC, setProfileThunkCreator, setStatusThunkCreator, loginThunkCreator} from './../../redux/ProfileReducer';
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {updateStatusThunkCreator} from "../../redux/ProfileReducer";
import {logoutThunkCreator} from "../../redux/HeaderReducer";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.setProfileThunkCreator(userId);
        this.props.setStatusThunkCreator(userId);
    }
    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatusThunkCreator}
                        sendLogin={this.props.loginThunkCreator}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profile,
        status: state.profile.status
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendPost: (post) => {
            dispatch(addPostAC(post));
        },
        setProfileThunkCreator: (userId) => {
            dispatch(setProfileThunkCreator(userId));
        },
        setStatusThunkCreator: (userId) => {
            dispatch(setStatusThunkCreator(userId));
        },
        updateStatusThunkCreator: (status) => {
            dispatch(updateStatusThunkCreator(status))
        },
        logoutThunkCreator: () => {
            dispatch(logoutThunkCreator());
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect)
(ProfileContainer);