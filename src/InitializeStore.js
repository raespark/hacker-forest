import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers/All';
import timerMiddleware from 'middleware/TimerMiddleware';
import reduxPromise from 'redux-promise';
import FlagPopupMiddleware from 'middleware/FlagPopupMiddleware';

const loadState = () => {
    try {
        const serializsedState = localStorage.getItem('redux-state');
        if (!serializsedState) {
            return undefined;
        }
        return JSON.parse(serializsedState);
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

const saveState = (partialState) => {
    try {
        localStorage.setItem('redux-state', JSON.stringify(partialState))
    } catch (err) {
        // Ignore
        console.error(err);
    }
}

const createSavableState = (fullState) => {
    let {gameState} = fullState;
    // Only save the portions of the state we care about
    return {
        gameState
    }
}

export default function initializeStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const preloadedState = loadState();

    const store = createStore(
        allReducers,
        preloadedState,
        composeEnhancers(applyMiddleware(reduxPromise, timerMiddleware, FlagPopupMiddleware))
    );

    // Save to local storage after each update
    store.subscribe(() => {
        saveState(createSavableState(store.getState()))
    });

    return store;
}