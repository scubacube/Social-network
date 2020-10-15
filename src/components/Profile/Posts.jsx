import React from 'react';
import Post from "./Post";
import {onPostChangeAC, sendPostAC} from "../../redux/ProfileReducer";

function Posts(props) {

    let posts = props.posts.map(el => <Post postText={el.postText}/>);
    let bla = React.createRef();

    let onPostChange = () => {
        let act = bla.current.value;
        props.dispatch(onPostChangeAC(act));
    }
    let sendPost = () => {
        props.dispatch(sendPostAC());
        bla.current.value = "";
    }
    return <div>
        {posts}
        <textarea ref={bla} onChange={onPostChange}></textarea>
        <button onClick={sendPost}>Post</button>
    </div>
}

export default Posts;