import {combineReducers} from 'redux';
import gameState from './gameStateReducer';
import tools from './toolsReducer';

export default combineReducers({
    gameState,
    tools
});