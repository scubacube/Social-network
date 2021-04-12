// import React from 'react';
// import {connect} from "react-redux";
// import {Redirect, withRouter} from "react-router";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";
// import {compose} from "redux";
// import login from "./login";
// import {authThunkCreator, loginThunkCreator, logoutThunkCreator} from "../../redux/HeaderReducer";
// import { Field, reduxForm } from 'redux-form'
// import handleSubmit from "redux-form/lib/handleSubmit";
// import { Element} from "../common/FormsControls";
// import {maxLengthCreator, required} from "../../utils/validators/validators";
//
// class LoginContainer extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     componentDidMount() {
//     }
//     render() {
//         return <login {...this.props}
//                       sendLogin={this.props.loginThunkCreator}
//                       forms={this.props.forms}/>
//     }
// }
//
// let mapStateToProps = (state) => {
//     return {
//         forms: state.form
//     }
// }
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         authThunkCreator: () => {
//             dispatch(authThunkCreator());
//         },
//         loginThunkCreator: (email, password, rememberMe) => {
//             dispatch(loginThunkCreator(email, password, rememberMe));
//         },
//         logoutThunkCreator: () => {
//             dispatch(logoutThunkCreator());
//         }
//     }
// }
//
// const LoginContainerWrapped = compose(connect(mapStateToProps, mapDispatchToProps),
//     withRouter,
//     withAuthRedirect)
// (LoginContainer);
//
// const maxLength20 = maxLengthCreator(20);
// const loginInput = Element("input");
// const LoginForm = (props) => {
//
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field name={"email"}
//                        type={"text"}
//                        component={loginInput}
//                        placeholder={"login"}
//                        validate={[required, maxLength20]}/>
//             </div>
//             <div>
//                 <Field name={"password"}
//                        type={"password"}
//                        component={loginInput}
//                        placeholder={"password"}
//                        validate={[required, maxLength20]}/>
//             </div>
//             <div>
//                 <Field name={"rememberMe"}
//                        type={"checkbox"}
//                        component={"input"}
//                        validate={[required]}/> remember me
//             </div>
//             <div>
//                 <button>login</button>
//             </div>
//         </form>
//     );
// }
//
// const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
//
// const login = (props) => {
//     const onSubmit1 = (formData) => {
//         props.loginThunkCreator(formData.email, formData.password, formData.rememberMe);
//     }
//
//     return (
//         <div>
//             <h1>login</h1>
//             <LoginReduxForm onSubmit={onSubmit1} />
//         </div>
//     );
// }
// export default login;