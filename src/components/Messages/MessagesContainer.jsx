import React from "react";
import Messages from './Messages';

class MessagesContainer extends React.Component {

    render() {
        return (
            <Messages state={this.props.state} dispatch={this.props.dispatch}/>
        )
    }
}

export default MessagesContainer;