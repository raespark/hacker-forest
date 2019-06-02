import { handleActions } from 'redux-actions';
import * as actions from 'actions';

const defaultState = {
    isGameActive: false,
    timeRemaining: 0,
    collectedFlags: 0,
    musicEnabled: false
}

export default handleActions({
    [actions.startGame](state) {
        return {
            ...state,
            isGameActive: true,
            timeRemaining: 30,
            collectedFlags: 0
        }
    },
    [actions.finishGame](state) {
        return {
            ...state,
            isGameActive: false,
            timeRemaining: 0,
        }
    },
    [actions.collectFlag](state) {
        return {
            ...state,
            collectedFlags: state.collectedFlags+1
        }
    },
    [actions.timerTick](state) {
        const timeRemaining = state.timeRemaining - 1;
        return {
            ...state,
            timeRemaining
        }
    },
    [actions.timerFinished](state) {
        return {
            ...state,
            isGameActive: false,
            timeRemaining: 0,
        }
    },
    [actions.toggleMuteMusic](state) {
        return {
            ...state,
            musicEnabled: !state.musicEnabled
        }
    }
}, defaultState);