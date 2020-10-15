const ON_CHANGE = "ON-CHANGE";
const ADD_MESSAGE = "ADD-MESSAGE";

let initState = {
    dialogsUsers: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Alex"},
        {id: 4, name: "Alex"},
        {id: 5, name: "Alex"},
        {id: 6, name: "Alex"},
        {id: 7, name: "Alex"}
    ],
    messages: [
        {id: 1, messageText: "dsdsds"},
        {id: 2, messageText: "2312"},
        {id: 3, messageText: "dsdsgfgfds"},
        {id: 4, messageText: "jhjh"},
        {id: 5, messageText: "popopo"},
        {id: 6, messageText: "tttt"},
    ],
    newMessageText: "enter some text here..."
}

export const addMessageAC = () => {
    return ({
        type: ADD_MESSAGE
    });
}

export const onChangeAC = (txt) => {
    return ({
        type: ON_CHANGE,
        act: txt
    });
}

export let messagesReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:  {
            let newMessage = {
                id: 10,
                messageText: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
        }
            return state;
        case ON_CHANGE: {
            state.newMessageText = action.act;
        }
            return state;
        default: return state;
    }
}
