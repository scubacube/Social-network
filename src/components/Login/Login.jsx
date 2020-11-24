import React from 'react';
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {authThunkCreator, loginThunkCreator, logoutThunkCreator} from "../../redux/HeaderReducer";
import { Field, reduxForm } from 'redux-form'
import handleSubmit from "redux-form/lib/handleSubmit";
import { Element} from "../Сommon/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import styles from "./../Сommon/FormsControls.module.css";

// class LoginContainer extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     componentDidMount() {
//     }
//     render() {
//         return <Login {...this.props}
//                       sendLogin={this.props.loginThunkCreator}
//                       forms={this.props.forms}/>
//     }
// }
let mapStateToProps = (state) => {
    return {
        forms: state.form,
        isSignedIn: state.auth.isSignedIn
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        authThunkCreator: () => {
            dispatch(authThunkCreator());
        },
        loginThunkCreator: (email, password, rememberMe) => {
            dispatch(loginThunkCreator(email, password, rememberMe));
        },
        logoutThunkCreator: () => {
            dispatch(logoutThunkCreator());
        }
    }
}
//
// export const LoginContainerWrapped = compose(connect(mapStateToProps, mapDispatchToProps),
//     withRouter,
//     withAuthRedirect)
// (LoginContainer);

const maxLength20 = maxLengthCreator(20);
const loginInput = Element("input");
const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"}
                       type={"text"}
                       component={loginInput}
                       placeholder={"Login"}
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
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isSignedIn) {
        return <Redirect to={"/Profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit1} />
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);