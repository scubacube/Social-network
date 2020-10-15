export const ON_POST_CHANGE = "ON-POST-CHANGE";
export const SEND_POST = "SEND-POST";

export const onPostChangeAC = (act) => {
    return {
        type: ON_POST_CHANGE,
        act: act
    };
}

export const sendPostAC = () => {
    return {
        type: SEND_POST
    };
}

export const ProfileReducer = (action, state) => {
    switch (action.type) {
        case SEND_POST: {
            let newMessage = {
                id: 10,
                postText: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newMessage);
            state.newPostText = "";
            return state
        }
        case ON_POST_CHANGE: {
            state.newPostText = action.act;
            return state;
        }
        default: return state;
    }
}