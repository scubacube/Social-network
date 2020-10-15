import React from "react";
import Profile from './Profile';

class ProfileContainer extends React.Component {

    render() {
        return (
            <Profile state={this.props.state} dispatch={this.props.dispatch}/>
        )
    }
}

export default ProfileContainer;