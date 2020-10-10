import React from 'react';
import classes from './Sibebar.module.css';
import {NavLink} from 'react-router-dom';


function Sidebar() {
    let listInitial = [
        {name: "Profile"},
        {name: "Users"}
    ];
    let list = listInitial.map(e => <li><NavLink to={`/${e.name}`}>{e.name}</NavLink></li>);
    return (
        <div className={classes.sidebar}>
            <ul>
                {list}
            </ul>

        </div>
    )
}
export default Sidebar;