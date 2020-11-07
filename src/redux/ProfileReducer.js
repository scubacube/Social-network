const ADD_POST = 'ADD-POST';
const ON_POST_CHANGE = 'ON-POST-CHANGE';

let initState = {
    posts: [
        {id: 1, postText: "first", likeCount: 10},
        {id: 2, postText: "second", likeCount: 10},
        {id: 3, postText: "third", likeCount: 10},
        {id: 4, postText: "fourth", likeCount: 10},
        {id: 5, postText: "fifth", likeCount: 10}
    ],
    newPostText: "enter some text here..."
}

export const addPostAC = () => {
    return (
        {
            type: ADD_POST
        }
    );
}

export const onPostChangeAC = (txt) => {
    return ({
        type: ON_POST_CHANGE,
        txt: txt
    })
}

export const profileReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 10,
                postText: state.newPostText,
                likeCount: 0
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];

            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";

            return stateCopy;
        }
        case ON_POST_CHANGE: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.txt;

            return stateCopy;
        }
        default: return state;
    }
}