import React from "react";
import Messages from './Messages';
import {addMessageAC, onChangeAC} from './../../redux/MessagesReducer';

function MessagesContainer(props) {
    let addMessage = () => {
        props.dispatch(addMessageAC());
    }
    let changeC = (act) => {
        props.dispatch(onChangeAC(act));
    }
    return (
        <Messages state={props.state} addMessage={addMessage} changeC={changeC}/>
        )
}

export default MessagesContainer;