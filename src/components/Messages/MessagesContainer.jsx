import React from "react";
import Messages from './Messages';
import {addMessageAC, onChangeAC} from './../../redux/MessagesReducer';
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogs.messages,
        newMessageText: state.dialogs.newMessageText,
        dialogsUsers: state.dialogs.dialogsUsers
    }
}

// let sendMessage = (s) => {
//     addMessage();
// }

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageAC(newMessageText))
        }
    }
}


// let AuthRedirectComponent = withAuthRedirect(Messages);
// let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default MessagesContainer;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Messages);