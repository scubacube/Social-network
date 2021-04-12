import React from 'react';
import Profile from './Profile';
import {
    addPostAC,
    savePhotoThunkCreator, saveProfileThunkCreator,
    setProfileThunkCreator,
    setStatusThunkCreator
} from './../../redux/ProfileReducer';
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {updateStatusThunkCreator} from "../../redux/ProfileReducer";
import {logoutThunkCreator} from "../../redux/HeaderReducer";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    refreshProfile() {
        let userId;
        !this.props.match.params.userId ? userId = this.props.signedInId : userId = this.props.match.params.userId;
        this.props.setProfileThunkCreator(userId);
        this.props.setStatusThunkCreator(userId);

        // this.props.profile.prof && this.props.savePhotoThunkCreator(this.props.profile.prof.photos.large);
        // this.props.savePhotoThunkCreator(p);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatusThunkCreator}
                        sendLogin={this.props.loginThunkCreator}
                        savePhoto={this.props.savePhoto}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profile,
        status: state.profile.status,
        signedInId: state.auth.data.id,
        isSignedIn: state.auth.isSignedIn
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendPost: (post) => {
            debugger
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
        },
        savePhoto: (photo) => {
            dispatch(savePhotoThunkCreator(photo));
        },
        saveProfile: (profile) => {
            dispatch(saveProfileThunkCreator(profile))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect)
(ProfileContainer);