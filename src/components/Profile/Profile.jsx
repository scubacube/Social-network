import React from "react";
import ProfileInfo from "./ProfileInfo";
import Posts from "./Posts";

function Profile(props) {
    return (
        <div>
            <ProfileInfo />
            <Posts posts={props.state.posts} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;