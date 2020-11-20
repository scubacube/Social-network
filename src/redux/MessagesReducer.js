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
    ]
}

export const addMessageAC = (newMessageText) => {
    return ({
        type: ADD_MESSAGE,
        newMessageText
    });
}

export let messagesReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:  {
            let newMessage = {
                id: 10,
                messageText: action.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.newMessageText = {...action.newMessageText}

            stateCopy.messages.push(newMessage);

            return stateCopy;
        }
        default: return state;
    }
}
