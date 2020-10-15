import React from "react";
import Message from "./Message";
import DialogUser from "./DialogUser";
import styles from './Messages.module.css'

function Messages(props) {
    let messages = props.state.messages.map(e => <Message messageText={e.messageText}/>);
    let dialogUsers = props.state.dialogsUsers.map(el => <DialogUser name={el.name}/>);

    let input = React.createRef();

    let onAddMessageC = () => {
        props.addMessage();
        input.current.value = '';
    };

    let onChangeC = () => {
        let act = input.current.value;
        props.changeC(act);
    };

    return (
            <div className={styles.messagesContainer}>
                <div className={styles.dialogUsers}>{dialogUsers}</div>
                <div className={styles.messages}>
                    <div>{messages}</div>
                    <div className={styles.sendMessage}>
                        <textarea onChange={onChangeC} ref={input}>{props.state.newMessageText}</textarea>
                        <button onClick={onAddMessageC}>Send</button>
                    </div>
                </div>
            </div>

    )
}

export default Messages;