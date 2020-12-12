import {addPostAC, deletePostAC, profileReducer} from "./ProfileReducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts: [
        {id: 1, postText: "first", likeCount: 10},
        {id: 2, postText: "second", likeCount: 10},
        {id: 3, postText: "third", likeCount: 10},
        {id: 4, postText: "fourth", likeCount: 10},
        {id: 5, postText: "fifth", likeCount: 10}
    ]
}

test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostAC("Something..");
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(6);
});

test('message of new post is something..', () => {
    //1. test data
    let action = addPostAC("Something..");
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts[5].postText).toBe("Something..");
});

test('deleting post', () => {
    //1. test data
    let action = deletePostAC(2);
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(4);
});

