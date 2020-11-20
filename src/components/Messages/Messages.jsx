import React from "react";
import Message from "./Message";
import DialogUser from "./DialogUser";
import styles from './Messages.module.css'
// import MessageForm from "./MessageForm";
import {Field, reduxForm} from "redux-form";

function Messages(props) {
    let messages = props.messages.map(e => <Message messageText={e.messageText}/>);
    let dialogsUsers = props.dialogsUsers.map(el => <DialogUser name={el.name}/>);

    const addMessage = (values) => {
        props.addMessage(values.newMessageText);
    }
    return (
            <div className={styles.messagesContainer}>
                <div className={styles.dialogUsers}>{dialogsUsers}</div>
                <div className={styles.messages}>
                    <div>{messages}</div>
                    <SendMessageReduxForm onSubmit={addMessage}/>
                </div>
            </div>
    )
}

let sendMessageForm = (props) => {
    return (
        <div className={styles.sendMessage}>
            <form onSubmit={props.handleSubmit}>
                <Field name={"newMessageText"}
                       component={"textarea"}
                       type={"textarea"} />
                <button>Send</button>
            </form>
        </div>
    )
}
const SendMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(sendMessageForm);

export default Messages;