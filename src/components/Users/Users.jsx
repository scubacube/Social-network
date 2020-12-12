import React, {useState} from "react";
import User from "./User";
import styles from "./Users.module.css";
import userPhoto from "./../../assets/user.png";
import loading from "./../../assets/spinner.svg";
import {NavLink} from "react-router-dom";
import Paginator from "../Сommon/Paginator";

let Users = (props) => {
    return <>
        <span>
            {
                props.isFetching ? <img src={loading}/> : null
            }
        </span>
        <div>
            <Paginator totalCount={props.totalCount}
                       pageSize={props.pageSize}
                       portionSize={props.portionSize}
                       onChanged={props.onChanged}
                       currentPage={props.currentPage} />
                {
                    props.users.map( e => <div key={e.id} className={styles.user}>
                            <span>
                                <NavLink to={`/Profile/${e.id}`}>
                                    <img src={e.photos.small != null ? e.photos.small : userPhoto} alt=""/>
                                </NavLink>
                                <span>{e.name}</span>
                                <span>{e.status}</span>
                                <div>
                                    {
                                        e.followed ?
                                            <button disabled={props.isFollowingInProgress.some( id => id === e.id )}
                                                    onClick={() => {
                                                        props.unfollow( e.id )
                                                    }}>Unfollow</button>
                                            : <button disabled={props.isFollowingInProgress.some( id => id === e.id )}
                                                      onClick={() => {
                                                          props.follow( e.id )
                                                      }}>Follow</button>
                                    }
                                </div>
                            </span>
                    </div> )
                }
        </div>
    </>
}

export default Users;