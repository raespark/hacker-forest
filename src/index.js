import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {timerStart} from 'actions';

import initializeStore from './initializeStore';

let store = initializeStore();
store.dispatch(timerStart());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);