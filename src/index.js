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

const logDevToolsWarning = () => {
    console.log("%cWhoa there!", "color:red;font-size:14pt;font-weight:bold;");
    console.log("%cThis is a game for amateur hackers. You can put the big guns away, you won't need them.", "color:red;font-size:12pt;font-weight:bold;")
    console.log("%cBut seriously, you shouldn't need the developer tools to solve any of these puzzles. Feel free to poke around, but we haven't taken any extra steps to hide things or prevent people from snooping, so you may spoil some puzzles for yourself.", "color:grey;font-size:10pt;")
}

logDevToolsWarning();

ReactDOM.render(
    <Provider store={store}>
        <App />
        <Helmet title="hacker-forest"/>
    </Provider>, document.getElementById('root')
);