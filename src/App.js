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
                      {/*<Sidebar />*/}
                      <div className="app_wrapper_container">
                          <Route path="/Profile" render={() => <ProfileContainer />}/>
                          <Route path="/Users" render={() => < UsersContainer />}/>
                          <Route path="/Messages" render={() => < MessagesContainer />}/>
                      </div>
                  </div>
          </div>
      </div>
  );
}

export default App;
