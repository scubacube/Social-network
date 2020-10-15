import React from 'react';
import Profile from './Profile';
import {onPostChangeAC, addPostAC} from './../../redux/ProfileReducer';

function ProfileContainer(props) {
    let postChange = (txt) => {
        props.dispatch(onPostChangeAC(txt));
    }
    let sendPost = () => {
        props.dispatch(addPostAC());
    }


    return <Profile state={props.state}
                    postChange={postChange}
                    sendPost={sendPost}/>
}

export default ProfileContainer;