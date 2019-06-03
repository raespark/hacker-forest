import {handleActions} from 'redux-actions';
import * as actions from 'actions';

const defaultState = {
    flagPopupVisible: false
}

export default handleActions({
    [actions.showFlagPopup](state) {
        return {
            ...state,
            flagPopupVisible: true
        }
    },
    [actions.hideFlagPopup](state) {
        return {
            ...state,
            flagPopupVisible: false
        }
    },
}, defaultState);