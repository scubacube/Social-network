import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/logo.png'
import {NavLink} from "react-router-dom";

function Header(props) {
    // debugger
    return (
        <header className={classes.header}>
            <a href="#">
                <img className={classes.logo} src={logo}></img>
            </a>
            <div className={classes.login}>
                {props.auth.isSignedIn ? props.auth.data.login : <NavLink to={"/Login"}>Login</NavLink> }
            </div>

        </header>
    );
}

export default Header;
