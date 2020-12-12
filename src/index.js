import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from "./redux/reduxStore";
import MainApp from "./App";

let rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <MainApp />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerender(state);
});

window.state = store.getState();


