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

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageAC(newMessageText))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Messages);