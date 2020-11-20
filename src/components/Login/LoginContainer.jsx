import React from 'react';
import { loginThunkCreator} from './../../redux/LoginReducer';
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import Login from "./Login";

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return <Login {...this.props}
                      sendLogin={this.props.loginThunkCreator}
                      forms={this.props.forms}/>
    }
}

let mapStateToProps = (state) => {
    return {
        forms: state.form
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        loginThunkCreator: (login) => {
            dispatch(loginThunkCreator(login));
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect)
(LoginContainer);