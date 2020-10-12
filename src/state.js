export let state = {
    profile: {
        posts: [
            {id: 1, postText: "first", likeCount: 10},
            {id: 2, postText: "second", likeCount: 10},
            {id: 3, postText: "third", likeCount: 10},
            {id: 4, postText: "fourth", likeCount: 10},
            {id: 5, postText: "fifth", likeCount: 10}
        ],
        newPostText: "enter some text here..."
    },
    users: [
        {id: 1, name: "ABC CDE"},
        {id: 2, name: "ABC CDE"},
        {id: 3, name: "ABC CDE"},
        {id: 4, name: "ABC CDE"},
    ],
    dialogs: {
        dialogsUsers: {},
        messages: [
            {id: 1, messageText: "dsdsds"},
            {id: 2, messageText: "2312"},
            {id: 3, messageText: "dsdsgfgfds"},
            {id: 4, messageText: "jhjh"},
            {id: 5, messageText: "popopo"},
            {id: 6, messageText: "tttt"},
        ],
        newMessageText: "enter some text here..."
    },
    sidebar: [
        {name: "Profile"},
        {name: "Messages"},
        {name: "Users"}
    ]
}

export let addMessage = (newMT) => {
    let newMessage = {
        id: 10,
        messageText: newMT
    }
    state.dialogs.messages.push(newMessage);
    state.dialogs.newMessageText = '';
    rerender(state);
}

export let onChange = (act) => {
    state.dialogs.newMessageText = act;
    rerender(state);
}

let rerender = () => {

}

export let subscribe = (observer) => {
    rerender = observer;
}