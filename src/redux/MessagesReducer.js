const ON_CHANGE = "ON-CHANGE";
const ADD_MESSAGE = "ADD-MESSAGE";

export const onChangeAC = (act) => {
    return {
        type: ON_CHANGE,
        act: act
    }
}
export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    }
}

export let messagesReducer = (action, state) => {

    switch (action.type) {
        case 'ADD_MESSAGE':  {
            let newMessage = {
                id: 10,
                messageText: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        }
        case 'ON_CHANGE': {
            state.newMessageText = action.act;
            return state;
        }
        default: return state;
    }
}
