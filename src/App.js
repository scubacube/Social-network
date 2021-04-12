import React from 'react';
import './App.css';
import HeaderContainer from "./components/header/HeaderContainer";
import {BrowserRouter, Route} from 'react-router-dom';
import UsersContainer from "./components/users/UsersContainer";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import Login from "./components/login/Login";
import {connect, Provider} from "react-redux";
import {initializeAppThunkCreator} from "./redux/appReducer";
import loading from "./assets/spinner.svg";
import {store} from "./redux/reduxStore";
import {withSuspense} from "./hoc/withSuspence";
import {compose} from "redux";
import {Redirect, Switch, withRouter} from "react-router";

const MessagesContainer = React.lazy(() =>
    import("./components/messages/MessagesContainer"));
const ProfileContainer = React.lazy(() =>
    import("./components/profile/ProfileContainer"));

class App extends React.Component {
    // catchAllUnhandledErrors = (promiseRejectionEvent) => {
    //     alert('some error occured');
    // }
    componentDidMount() {
        this.props.initializeAppThunkCreator();
        // window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        // window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
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
                            <Switch>
                                <Route path="/Profile/:userId?" render={withSuspense(ProfileContainer)}/>
                                <Route exact path='/'><Redirect to='/Profile'/></Route>
                                <Route path="/Users" render={() => < UsersContainer/>}/>
                                <Route path="/Messages" render={withSuspense(MessagesContainer)}/>
                                <Route path="/Login" render={() => < Login/>}/>
                                <Route path="*" render={() => <div>Not found!</div>}/>
                            </Switch>
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

const AppContainer =
    compose(withRouter, connect(mapStateToProps, {initializeAppThunkCreator}))(App);

const MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp;