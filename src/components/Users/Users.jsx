import React from "react";
import User from "./User";
import styles from "./Users.module.css";
import userPhoto from "./../../assets/user.png";
import loading from "./../../assets/spinner.svg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
        let pageCount = Math.ceil(props.totalCount/props.pageSize);
        let arrayOfPages = [];

        for (let i = 1; i <= pageCount; i++) {
            arrayOfPages.push(i);
        }

        return <>
                <span>
                    {
                        props.isFetching ? <img src={loading}/> : null
                    }
                </span>
                <div>
                    <div>
                        {
                            arrayOfPages.map(p => {
                                return <span onClick={() => props.onChanged(p)} className={props.currentPage === p
                                && styles.pageActive || styles.paginator}>{p}</span>
                            })
                        }
                    </div>
                    {
                        props.users.map(e => <div key={e.id} className={styles.user}>
                            <span>
                                <NavLink to={`/Profile/${e.id}`}>
                                    <img src={ e.photos.small != null ? e.photos.small : userPhoto} alt=""/>
                                </NavLink>
                                <span>{e.name}</span>
                                <span>{e.status}</span>
                                <div>
                                    {
                                        e.followed ?
                                            <button disabled={props.isFollowingInProgress.some(id => id === e.id)}
                                                    onClick={ () => {props.unfollowCB(e.id)} }>Unfollow</button>
                                            : <button disabled={props.isFollowingInProgress.some(id => id === e.id)}
                                                      onClick={ () => {props.followCB(e.id)} }>Follow</button>
                                    }
                                </div>
                            </span>
                        </div>)
                    }
                </div>
            </>
    }

export default Users;