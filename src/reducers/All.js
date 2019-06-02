import {combineReducers} from 'redux';
import gameState from './GameStateReducer';
import tools from './ToolsReducer';

export default combineReducers({
    gameState,
    tools
});