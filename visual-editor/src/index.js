import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {IntlProvider} from "react-intl";

import store from './store/store';


ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale='de'>
            <App />
        </IntlProvider>
    </Provider>,
document.getElementById('visual-editor'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
