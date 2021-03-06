import React from 'react';
import {Redirect} from "react-router";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render() {
            if (!this.props.isSignedIn) {
                // debugger
                return <Redirect to={"/login"} />
            }
            else return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
