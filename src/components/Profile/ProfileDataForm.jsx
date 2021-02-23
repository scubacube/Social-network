import React from "react";
import {createField, Input, Textarea} from "../Сommon/FormsControls";
import {reduxForm} from "redux-form";
import styles from "./Profile.module.css";
import {required} from "../../utils/validators/validators";

const ProfileDataForm = ( {handleSubmit, props} ) => {
    return <form onSubmit={ handleSubmit }>
        <div><button onClick={()=>{}}>Save</button></div>
        <div>
            <b>My name: </b> {createField("Full name", "fullName", [required], Input)}
        </div>
        <br/>
        <div>
            <b> Looking for a job: </b>
            {createField("", "lookingForAJob", [], Input, {type: "checkbox"} )}
        </div>
        <br/>
        <div>
            <b>My professional skills: </b>
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea )}
        </div>
        <div>
            <b> About Me: </b>
            {createField("A few words about myself...", "aboutMe", [], Textarea )}
        </div>
        <br/><br/>
        <div>
            <b>Contacts: </b> {Object.keys(props.contacts).map(e => {
            return <div className={styles.contact}>
                <b>{e}: {createField(e, "contacts." + e, [], Input )}</b>

            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: "editProfile" })(ProfileDataForm);

export default ProfileDataFormReduxForm;