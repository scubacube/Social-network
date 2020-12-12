import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import {BrowserRouter, Route} from 'react-router-dom';
// import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import MessagesContainer from "./components/Messages/MessagesContainer";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeAppThunkCreator} from "./redux/appReducer";
import loading from "./assets/spinner.svg";
import {store} from "./redux/reduxStore";
import {withSuspense} from "./HOC/withSuspence";

const MessagesContainer = React.lazy(() =>
    import("./components/Messages/MessagesContainer"));
const ProfileContainer = React.lazy(() =>
    import("./components/Profile/ProfileContainer"));

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
                            <Route path="/Profile/:userId?" render={withSuspense(ProfileContainer)}/>
                            <Route path="/Users" render={() => < UsersContainer/>}/>
                            <Route path="/Messages" render={withSuspense(MessagesContainer)}/>
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

const AppContainer = connect(mapStateToProps, {initializeAppThunkCreator})(App);

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