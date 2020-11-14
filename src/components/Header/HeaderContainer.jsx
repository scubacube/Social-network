import React from 'react';
import Header from "./Header";
import {authMe, authThunkCreator} from "../../redux/HeaderReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authThunkCreator();
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
            dispatch(authMe(data));
        },
        authThunkCreator: () => {
            dispatch(authThunkCreator());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);