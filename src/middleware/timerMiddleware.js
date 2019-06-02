import * as actions from 'actions';

let timer;

export default store => next => action => {
    if (action.type === "TIMER_START") {
        if (!timer) {
            timer = setInterval(() => {if (store.getState().gameState.isGameActive) {store.dispatch(actions.timerTick())}}, 1000);
        }
    }
    next(action);
    if (action.type === "TIMER_TICK") {
        const gameState = store.getState().gameState;
        if (gameState.timeRemaining <= 0) {
            store.dispatch(actions.timerFinished());
        }
    }
};