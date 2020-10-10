import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Sidebar from "./components/sidebar/Sidebar";
import { Route } from 'react-router-dom';
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
      <div className="app_wrapper">
          <div className="container">
              <HeaderContainer/>
              <div className="row">
                  <Sidebar/>
                  <div className="app_wrapper_container">
                      <Route path="/Profile" component={ProfileContainer}/>
                      <Route path="/Users" component={UsersContainer}/>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
