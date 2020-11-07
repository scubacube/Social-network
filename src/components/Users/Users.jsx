import React from "react";
import User from "./User";
import styles from "./Users.module.css";
import userPhoto from "./../../assets/user.png";
import loading from "./../../assets/spinner.svg";

let Users = (props) => {
        let pageCount = Math.ceil(props.totalCount/props.pageSize);
        let arrayOfPages = [];

        for (let i = 1; i <= pageCount; i++) {
            arrayOfPages.push(i);
        }
        return <>
                <span>
                    {
                        props.users.isFetching ? <img src={loading}/> : null
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
                        props.users.users.map(e => <div key={e.id} className={styles.user}>
                            <span>
                                <img src={ e.photos.small != null ? e.photos.small : userPhoto} alt=""/>
                                <span>{e.name}</span>
                                <span>{e.status}</span>
                                <div>
                                    {
                                        e.followed ? <button onClick={ () => {props.followCB(e.id)} }>Unfollow</button>
                                            : <button onClick={ () => {props.unfollowCB(e.id)} }>Follow</button>
                                    }
                                </div>
                            </span>
                        </div>)
                    }
                </div>
            </>
    }

export default Users;