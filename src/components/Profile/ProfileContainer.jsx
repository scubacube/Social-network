import React from 'react';
import Profile from './Profile';
import {onPostChangeAC, addPostAC, setProfileAC} from './../../redux/ProfileReducer';
import {connect} from "react-redux";
import * as axios from "axios";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId).then(resp =>
        {
            this.props.setProfile(resp.data);
        });
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        postChange: (txt) => {
            dispatch(onPostChangeAC(txt));
        },
        sendPost: () => {
            dispatch(addPostAC());
        },
        setProfile: (profile) => {
            dispatch(setProfileAC(profile));
        }
    }
}

let WithIrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithIrlData);