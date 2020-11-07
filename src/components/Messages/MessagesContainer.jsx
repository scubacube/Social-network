import React from "react";
import Messages from './Messages';
import {addMessageAC, onChangeAC} from './../../redux/MessagesReducer';
import {connect} from "react-redux";

// function MessagesContainer(props) {
//     let addMessage = () => {
//         props.dispatch(addMessageAC());
//     }
//     let changeC = (act) => {
//         props.dispatch(onChangeAC(act));
//     }
//     return (
//         <Messages state={props.state} addMessage={addMessage} changeC={changeC}/>
//         )
// }

let mapStateToProps = (state) => {
    return {
        messages: state.dialogs.messages,
        newMessageText: state.dialogs.newMessageText,
        dialogsUsers: state.dialogs.dialogsUsers
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        changeC: (act) => {
            dispatch(onChangeAC(act))
        }
    }
}

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;