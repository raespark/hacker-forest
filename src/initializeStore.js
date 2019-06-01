import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers/all';
import reduxPromise from 'redux-promise';

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
    // Only save the portions of the state we care about
    return {}
}

export default function initializeStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const preloadedState = loadState();

    const store = createStore(
        allReducers,
        preloadedState,
        composeEnhancers(applyMiddleware(reduxPromise))
    );

    // Save to local storage after each update
    store.subscribe(() => {
        saveState(createSavableState(store.getState()))
    });

    return store;
}