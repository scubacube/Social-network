import {messagesReducer} from './MessagesReducer';
import {profileReducer} from "./ProfileReducer";

// export let store = {
//     _state: {
//         profile: {
//             posts: [
//                 {id: 1, postText: "first", likeCount: 10},
//                 {id: 2, postText: "second", likeCount: 10},
//                 {id: 3, postText: "third", likeCount: 10},
//                 {id: 4, postText: "fourth", likeCount: 10},
//                 {id: 5, postText: "fifth", likeCount: 10}
//             ],
//             newPostText: "enter some text here..."
//         },
//         users: [
//             {id: "1", name: "John", photos: {small: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png",
//                     large: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdqGHt0jo2194EC7ohIYLM_m9nJ9xFCdA6SA&usqp=CAU"},
//                 status: true,
//                 followed: true},
//
//             {id: "2", name: "John", photos: {small: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png",
//                     large: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdqGHt0jo2194EC7ohIYLM_m9nJ9xFCdA6SA&usqp=CAU"},
//                 status: true,
//                 followed: true},
//             {id: "3", name: "John", photos: {small: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png",
//                     large: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdqGHt0jo2194EC7ohIYLM_m9nJ9xFCdA6SA&usqp=CAU"},
//                 status: true,
//                 followed: true},
//             {id: "4", name: "John", photos: {small: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png",
//                     large: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdqGHt0jo2194EC7ohIYLM_m9nJ9xFCdA6SA&usqp=CAU"},
//                 status: true,
//                 followed: true}
//         ],
//         dialogs: {
//             dialogsUsers: [
//                 {id: 1, name: "Alex"},
//                 {id: 2, name: "Alex"},
//                 {id: 3, name: "Alex"},
//                 {id: 4, name: "Alex"},
//                 {id: 5, name: "Alex"},
//                 {id: 6, name: "Alex"},
//                 {id: 7, name: "Alex"}
//             ],
//             messages: [
//                 {id: 1, messageText: "dsdsds"},
//                 {id: 2, messageText: "2312"},
//                 {id: 3, messageText: "dsdsgfgfds"},
//                 {id: 4, messageText: "jhjh"},
//                 {id: 5, messageText: "popopo"},
//                 {id: 6, messageText: "tttt"},
//             ],
//             newMessageText: "enter some text here..."
//         },
//         sidebar: [
//             {name: "Profile"},
//             {name: "Messages"},
//             {name: "Users"}
//         ]
//     },
//     _rerender() {
//
//     },
//     subscribe(observer) {
//         this._rerender = observer;
//     },
//     getState() {
//         return this._state;
//     },
//     dispatch(action) {
//         this._state.dialogs = messagesReducer(action, this._state.dialogs);
//         this._state.profile = profileReducer(action, this._state.profile);
//         this._rerender(this._state);
//     }
// }