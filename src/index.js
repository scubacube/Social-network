import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { store } from "./redux/reduxStore";
import {Provider} from "react-redux";

let rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
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


