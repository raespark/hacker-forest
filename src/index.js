import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Helmet from 'react-helmet';

import App from './App';
import {timerStart} from 'actions';

import './index.css';

import initializeStore from './InitializeStore';

let store = initializeStore();
store.dispatch(timerStart());

ReactDOM.render(
    <Provider store={store}>
        <App />
        <Helmet title="hacker-forest"/>
    </Provider>, document.getElementById('root')
);