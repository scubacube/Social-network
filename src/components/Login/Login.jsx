import React from 'react';
import { Field, reduxForm } from 'redux-form'
import handleSubmit from "redux-form/lib/handleSubmit";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"}
                       type={"text"}
                       component={"input"}
                       placeholder={"Login"}/>
            </div>
            <div>
                <Field name={"password"}
                       type={"text"}
                       component={"input"}
                       placeholder={"password"}/>
            </div>
            <div>
                <Field name={"rememberMe"}
                       type={"checkbox"}
                       component={"input"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
    const onSubmit1 = (formData) => {
        props.sendLogin(formData);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit1} />
        </div>
    );
}
export default Login;
