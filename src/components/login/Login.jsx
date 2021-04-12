import React from 'react';
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {authThunkCreator, loginThunkCreator, logoutThunkCreator} from "../../redux/HeaderReducer";
import { Field, reduxForm } from 'redux-form'
import handleSubmit from "redux-form/lib/handleSubmit";
import {createField, Element, Input} from "../common/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import styles from "../common/FormsControls.module.css";

let mapStateToProps = (state) => {
    // debugger
    return {
        forms: state.form,
        isSignedIn: state.auth.isSignedIn,
        captchaUrl: state.auth.captchaUrl
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        authThunkCreator: () => {
            dispatch(authThunkCreator());
        },
        loginThunkCreator: (email, password, rememberMe, captcha) => {
            dispatch(loginThunkCreator(email, password, rememberMe, captcha));
        },
        logoutThunkCreator: () => {
            dispatch(logoutThunkCreator());
        }
    }
}

const maxLength20 = maxLengthCreator(20);
const loginInput = Element("input");
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"}
                       type={"text"}
                       component={loginInput}
                       placeholder={"login"}
                       validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field name={"password"}
                       type={"password"}
                       component={loginInput}
                       placeholder={"password"}
                       validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field name={"rememberMe"}
                       type={"checkbox"}
                       component={"input"}/> remember me
            </div>

            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl &&
            createField("Symbols from image", "captcha", [required], Input )}

            { props.error && <div className={styles.formError}>
                {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
    const onSubmit1 = (formData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isSignedIn) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit1} captchaUrl={props.captchaUrl}/>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);