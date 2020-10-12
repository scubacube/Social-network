import React from "react";
import Messages from './Messages';

class MessagesContainer extends React.Component {

    render() {
        return (
            <Messages state={this.props.state} addMessage={this.props.addMessage} onChange={this.props.onChange}/>
        )
    }
}

export default MessagesContainer;