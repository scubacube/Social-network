import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/logo.png'

function Header() {
    return (
        <header className={classes.header}>
            <a href="#">
                <img className={classes.logo} src={logo}></img>
            </a>
            <div className={classes.login}>login will be here</div>
        </header>
    );
}

export default Header;
