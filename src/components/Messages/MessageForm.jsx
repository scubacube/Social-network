// import React from "react";
// import styles from './Messages.module.css'
// import {Field, reduxForm} from "redux-form";
//
// let sendMessageForm = (props) => {
//
//     return (
//         <div className={styles.sendMessage}>
//             <form onSubmit={props.handleSubmit}>
//                 <Field name={"newMessageText"}
//                        component={"textarea"}
//                        type={"textarea"} />
//                 <button>Send</button>
//             </form>
//         </div>
//     )
// }
// const SendMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(sendMessageForm);

// let MessageForm = (props) => {
//
//     const addNewMessage = (formData) => {
//         console.log(formData);
//     }
//     return (
//             <>
//             <SendMessageReduxForm onSubmit={props.addMes} />
//             </>
//     )
// }
//
// export default MessageForm;