import {handleActions} from 'redux-actions';
import * as actions from 'actions';

const defaultState = {
    hasToolEnabled: false,
    currentTool: null,
    toolName: '-',
    toolDescription: '-'
}

export default handleActions({
    [actions.toggleTool](state, {payload: {tool}}) {
        let hasToolEnabled = state.currentTool !== tool;
        let currentTool = hasToolEnabled ? tool : null;
        return {
            ...state,
            hasToolEnabled: hasToolEnabled, 
            currentTool,            
            toolName: hasToolEnabled ? currentTool.name : '-',
            toolDescription: hasToolEnabled ? currentTool.description : '-'
        }
    },
    [actions.showToolDescription](state, {payload: {name, description}}) {
        return {
            ...state,
            toolName: name,
            toolDescription: description
        }
    },
    [actions.hideToolDescription](state) {
        return {
            ...state,
            toolName: state.hasToolEnabled ? state.currentTool.name : '-',
            toolDescription: state.hasToolEnabled ? state.currentTool.description : '-'
        }
    }
}, defaultState);