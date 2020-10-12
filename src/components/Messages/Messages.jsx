import React from "react";
import Message from "./Message/Message";

function Messages(props) {
    let messages = props.state.messages.map(e => <Message messageText={e.messageText}/>);
    let input = React.createRef();

    let addMessageC = () => {
        let text = input.current.value;
        props.addMessage(text);
        input.current.value = '';
    };

    let onChangeC = () => {
        let act = input.current.value;
        props.onChange(act);
    };

    return (
        <div>
            {messages}
            <textarea onChange={onChangeC} ref={input}></textarea>
            <button onClick={addMessageC}>Send</button>
        </div>

    )
}

export default Messages;