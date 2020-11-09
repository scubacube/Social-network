import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {authMeAC} from "../../redux/HeaderReducer";
import {connect} from "react-redux";
import {authAPI} from "../API/Api";

class HeaderContainer extends React.Component {

    componentDidMount() {

        authAPI.authMeAPI().then(resp =>
        {
            if (resp.data.resultCode === 0) {
                let {email, id, login} = resp.data.data
                this.props.authMe({email, id, login});
            }
        });
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        authMe: (data) => {
            dispatch(authMeAC(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);