import { handleActions } from 'redux-actions';
import * as actions from 'actions';
import GameStates from 'content/GameStates';

const defaultState = {
    currentGameState: GameStates.NOT_STARTED,
    timeRemaining: 0,
    collectedFlags: 0,
    musicEnabled: false,
    ghostTownCompleted: false
}

export default handleActions({
    [actions.startGame](state) {
        return {
            ...state,
            currentGameState: GameStates.RUNNING,
            timeRemaining: 600,
            collectedFlags: 0
        }
    },
    [actions.finishGame](state) {
        return {
            ...state,
            currentGameState: GameStates.WON,
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
            currentGameState: GameStates.LOST,
            timeRemaining: 0,
        }
    },
    [actions.toggleMuteMusic](state) {
        return {
            ...state,
            musicEnabled: !state.musicEnabled
        }
    },
    [actions.finishedGhostTown] (state) {
        return {
            ...state,
            ghostTownCompleted: !state.finishedGhostTown
        }
    }
}, defaultState);