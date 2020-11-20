import React from 'react';
import Post from './Post';
import loading from "../../assets/spinner.svg";
import styles from "./Profile.module.css";
import ProfileStatus from "./ProfileStatus";
import {Field, reduxForm} from "redux-form";

function Profile(props) {
    let posts = props.profile.posts.map(el => <Post postText={el.postText} />);

    const onSendPost = (posts) => {
        props.sendPost(posts.sendPost);
    }

    if (props.profile.prof === null) {
        return <img src={loading}/>
    }
    return (
        <div className={styles}>
            <img className={styles.avatar} src={props.profile.prof.photos.large} alt=""/>
            <br/><br/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <br/>
            <div>{posts}</div>
            <SendPostFormReduxForm onSubmit={onSendPost}/>
        </div>
    );
}
let sendPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"sendPost"} component={"textarea"}/>
            <button>Post</button>
        </form>
    )
};
const SendPostFormReduxForm = reduxForm({ form: "posts" })(sendPostForm);

export default Profile;