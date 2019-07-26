import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store/store';

    window.tinyMCESettings = {
        menubar: false,
        statusbar: false,
        plugins: 'link code image advcode',
        apply_source_formatting : true,
        toolbar: 'formatselect | bold italic | code blockquote link image | undo redo',
        height: 340,
        content_style: 'body{font-family: BioSans_Regular, Arial, sans-serif; color: #003e6b}' +
'                               div,p{font-size: 16px;} p{margin: 10px 0 0}',
    };


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('lxc-editor'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
