import React, {useState} from 'react';
import Post from './Post';
import loading from "../../assets/spinner.svg";
import styles from "./Profile.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Element} from "../Сommon/FormsControls";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "./../../assets/user.png";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const maxLength10 = maxLengthCreator(10);
const Textarea = Element("textarea");

function Profile(props) {
    const [editMode, setEditMode] = useState(false);

    let posts = props.profile.posts.map(el => <Post postText={el.postText} />);

    const onSendPost = (posts) => {
        props.sendPost(posts.sendPost);
    }
    const OnMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    if (props.profile.prof === null) {
        return <img src={loading}/>
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData);
        setEditMode(false);
    }
    return (
        <div className={styles}>
            <img className={styles.avatar} src={props.profile.prof.photos.large || userPhoto} alt=""/>
            {props.isOwner && <input type={"file"} onChange={OnMainPhotoSelected}/> }
            <br/><br/>
            <b>Status: </b><ProfileStatusWithHooks status={props.profile.status} updateStatus={props.updateStatus}/>
            <br/>
            { editMode ?
                <ProfileDataFormReduxForm initialValues={props.profile.prof}
                                          props={props.profile.prof}
                                          onSubmit={onSubmit}/> :
                <ProfileData isOwner={props.isOwner}
                             profile={props.profile}
                             goToEditMode={() => {setEditMode(true)}}/> }
            {/*<ProfileData profile={props.profile}/>*/}
            <br/>
            <div>{posts}</div>
            <SendPostFormReduxForm onSubmit={onSendPost}/>
        </div>
    );
}
const ProfileData = (props) => {
    return <div>
        {props.isOwner && <div><button onClick={props.goToEditMode}>Edit</button></div>}
        <div>
            <b>My name: </b> {props.profile.prof.fullName}
        </div>
        <br/>
        <div>
            <b> Looking for a job: </b> {props.profile.prof.lookingForAJob ? "Yes" : "No"}
        </div>
        <br/>
        <div>
            {
                !props.profile.prof.lookingForAJob &&
                <div>
                    <b>My professional skills: </b> {props.profile.prof.lookingForAJobDescription}
                </div>
            }
        </div>
        <div>
            <b> About Me: </b> {props.profile.prof.aboutMe}
        </div>
        <br/><br/>
        <div>
            <b>Contacts: </b> {Object.keys(props.profile.prof.contacts).map(e => {
            return <Contact key={e} contactKey={e} contactValue={props.profile.prof.contacts[e]}/>
        })}
        </div>
    </div>
}

const Contact = ({contactKey, contactValue}) => {
    return <div><b>{contactKey}: </b>{contactValue}</div>
}

let sendPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"sendPost"} component={Textarea}
                   validate={[required, maxLength10]} placeholder={"post message"}/>
            <button>Post</button>
        </form>
    )
};
const SendPostFormReduxForm = reduxForm({ form: "posts" })(sendPostForm);

export default Profile;