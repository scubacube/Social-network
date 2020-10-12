import React from 'react';
import classes from './Sibebar.module.css';
import {NavLink} from 'react-router-dom';


function Sidebar(props) {
    let list = props.props.map(e => <li><NavLink to={`/${e.name}`}>{e.name}</NavLink></li>);
    return (
        <div className={classes.sidebar}>
            <ul>
                {list}
            </ul>

        </div>
    )
}
export default Sidebar;