import React from 'react';
import Post from './Post';


function Profile(props) {
    let posts = props.posts.map(el => <Post postText={el.postText} />);
    const bla = React.createRef();

    const onPostChange = () => {
        let txt = bla.current.value;
        props.postChange(txt);
    }

    const onSendPost = () => {
        props.sendPost()
        bla.current.value = "";
    }
    return (
        <div>
            <div>{posts}</div>
            <textarea onChange={onPostChange} ref={bla}></textarea>
            <button onClick={onSendPost}>Post</button>
        </div>
    );
}

export default Profile;