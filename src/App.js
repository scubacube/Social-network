import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Sidebar from "./components/sidebar/Sidebar";
import { Route } from 'react-router-dom';
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";

function App(props) {

  return (
      <div className="app_wrapper">
          <div className="container">
              <HeaderContainer/>
              <div className="row">
                  <Sidebar props={props.state.sidebar}/>
                  <div className="app_wrapper_container">
                      <Route path="/Profile" render={() => <ProfileContainer  state={props.state.profile}
                                                                              dispatch={props.dispatch}/>}/>

                      <Route path="/Users" render={() => < UsersContainer props={props.state.users}/>}/>

                      <Route path="/Messages" render={() => < MessagesContainer state={props.state.dialogs}
                                                                                dispatch={props.dispatch}/>}/>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
