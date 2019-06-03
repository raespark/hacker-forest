import {combineReducers} from 'redux';
import gameState from './GameStateReducer';
import tools from './ToolsReducer';
import ui from './UiReducer';

export default combineReducers({
    gameState,
    tools,
    ui
});