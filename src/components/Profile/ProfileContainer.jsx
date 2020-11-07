import React from 'react';
import Profile from './Profile';
import {onPostChangeAC, addPostAC} from './../../redux/ProfileReducer';
import {connect} from "react-redux";

// function ProfileContainer(props) {
//     let postChange = (txt) => {
//         props.dispatch(onPostChangeAC(txt));
//     }
//     let sendPost = () => {
//         props.dispatch(addPostAC());
//     }
//
//
//     return <Profile state={props.state}
//                     postChange={postChange}
//                     sendPost={sendPost}/>
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        postChange: (txt) => {
            dispatch(onPostChangeAC(txt));
        },
        sendPost: () => {
            dispatch(addPostAC());
        }
    }
}

let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;