import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import { Route } from 'react-router-dom';
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeAppThunkCreator} from "./redux/appReducer";
import loading from "./assets/spinner.svg";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeAppThunkCreator();
    }
    render() {
        if (!this.props.initialized) {
            return <img src={loading}/>
        }
        return (
            <div className="app_wrapper">
                <div className="container">
                    <HeaderContainer/>
                    <div className="row">
                        <SidebarContainer/>
                        <div className="app_wrapper_container">
                            <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/Users" render={() => < UsersContainer/>}/>
                            <Route path="/Messages" render={() => < MessagesContainer/>}/>
                            <Route path="/Login" render={() => < Login/>}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


// export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
export default connect(mapStateToProps, {initializeAppThunkCreator})(App);
