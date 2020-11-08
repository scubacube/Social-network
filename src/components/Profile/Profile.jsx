import React from 'react';
import Post from './Post';
import loading from "../../assets/spinner.svg";
import styles from "./Profile.module.css";

function Profile(props) {
    let posts = props.profile.posts.map(el => <Post postText={el.postText} />);
    const bla = React.createRef();

    const onPostChange = () => {
        let txt = bla.current.value;
        props.postChange(txt);
    }
    const onSendPost = () => {
        props.sendPost()
        bla.current.value = "";
    }

    if (props.profile.prof === null) {
        return <img src={loading}/>
    }
    return (
        <div className={styles}>
            <img className={styles.avatar} src={props.profile.prof.photos.large} alt=""/>
            <div>{props.profile.prof.aboutMe}</div>
            <div>{posts}</div>
            <textarea onChange={onPostChange} ref={bla}></textarea>
            <button onClick={onSendPost}>Post</button>
        </div>
    );
}

export default Profile;