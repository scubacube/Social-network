import React from "react";
import User from "./User";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "./../../assets/user.png";

class Users extends React.Component {

    constructor(props) {

        super(props);

    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`).then(resp =>
        {
            this.props.setUser(resp.data.items);
            this.props.setTotalUsersCount(resp.data.totalCount)
        });
    }

    onChanged = (cp) => {
        this.props.setCurrentPage(cp);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${cp}
        &count=${this.props.pageSize}`).then(resp =>
        {this.props.setUser(resp.data.items)});
    }

    followCB = (id) => {
        this.props.follow(id);
    }
    unfollowCB = (id) => {
        this.props.unfollow(id);
    }

    render () {
        let pageCount = Math.ceil(this.props.totalCount/this.props.pageSize);
        let arrayOfPages = [];

        for (let i = 1; i <= pageCount; i++) {
            arrayOfPages.push(i);
        }
        return <div>
                <div>
                    {
                        arrayOfPages.map(p => {
                            return <span onClick={() => this.onChanged(p)} className={this.props.currentPage === p
                                && styles.pageActive || styles.paginator}>{p}</span>
                        })
                    }
                </div>
                {
                    this.props.users.users.map(e => <div key={e.id} className={styles.user}>
                        <span>
                            <img src={ e.photos.small != null ? e.photos.small : userPhoto} alt=""/>
                            <span>{e.name}</span>
                            <span>{e.status}</span>
                            <div>
                                {
                                    e.followed ? <button onClick={ () => {this.followCB(e.id)} }>Unfollow</button>
                                        : <button onClick={ () => {this.unfollowCB(e.id)} }>Follow</button>
                                }


                            </div>
                        </span>
                    </div>)
                }
            </div>
    }
};

export default Users;