import { handleActions } from 'redux-actions';
import * as actions from 'actions';
import GameStates from 'content/GameStates';

const defaultState = {
    currentGameState: GameStates.NOT_STARTED,
    timeRemaining: 0,
    collectedFlags: 0,
    musicEnabled: false,
    ghostTownCompleted: false,
    petParadeCatsCompleted: false,
    petParadePasswordCompleted: false,
    lampFixedBrightBulb :false,
    brightBulbLampsCompleted :false,
    brightBulbMessageCompleted :false,
    notes:'',
    safeOpenedSafeNSound: false,
    safeNSoundCompleted: false
}

export default handleActions({
    [actions.restartGame](state) {
        return Object.assign({}, defaultState);
    },
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
            currentGameState: GameStates.WON
        }
    },
    [actions.giveUpGame](state) {
        return {
            ...state,
            currentGameState: GameStates.LOST
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
            ghostTownCompleted: true
        }
    },
    [actions.finishedPetParadeCats] (state) {
        return {
            ...state,
            petParadeCatsCompleted: true
        }
    },
    [actions.finishedPetParadePassword] (state) {
        return {
            ...state,
            petParadePasswordCompleted: true
        }
    },
    [actions.lampFixedBrightBulb] (state) {
        return {
            ...state,
            lampFixedBrightBulb: true
        }
    },
    [actions.finshedBrightBulbLamps] (state) {
        return {
            ...state,
            brightBulbLampsCompleted: true
        }
    },
    [actions.finishedBrightBulbMessage] (state) {
        return {
            ...state,
            brightBulbMessageCompleted: true
        }
    },
    [actions.updateNotes] (state, {payload: {notes}}) {
        return {
            ...state,
            notes
        }
    },
    [actions.openedSafeSafeNSound] (state) {
        return {
            ...state,
            safeOpenedSafeNSound: true
        }
    },
    [actions.finishedSafeNSound] (state) {
        return {
            ...state,
            safeNSoundCompleted: true
        }
    }
}, defaultState);