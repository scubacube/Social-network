import React from "react";
import Message from "./Message";
import {addMessageAC, onChangeAC} from "../../redux/MessagesReducer";
import DialogUser from "./DialogUser";
import styles from './Messages.module.css'

function Messages(props) {
    let messages = props.state.messages.map(e => <Message messageText={e.messageText}/>);
    let dialogUsers = props.state.dialogsUsers.map(el => <DialogUser name={el.name}/>);

    let input = React.createRef();

    let addMessageC = () => {
        let text = input.current.value;
        props.dispatch(addMessageAC());
        input.current.value = '';
    };

    let onChangeC = () => {
        let act = input.current.value;
        props.dispatch(onChangeAC(act));
    };

    return (
            <div className={styles.messagesContainer}>
                <div className={styles.dialogUsers}>{dialogUsers}</div>
                <div className={styles.messages}>
                    <div>{messages}</div>
                    <div className={styles.sendMessage}>
                        <textarea onChange={onChangeC} ref={input}></textarea>
                        <button onClick={addMessageC}>Send</button>
                    </div>
                </div>
            </div>

    )
}

export default Messages;