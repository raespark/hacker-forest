import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions';
import gameStates from 'content/GameStates';

import StartGame from './StartGame';
import GameRunning from './GameRunning';
import GameEnd from './GameEnd';

import "./HomePage.scss";

const mapStateToProps = ({ gameState: { collectedFlags, currentGameState } }) => ({
    collectedFlags,
    currentGameState
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})

const HomePage = (props) => {
    return <div className="home">
        <div className="content">
            {props.currentGameState === gameStates.NOT_STARTED && 
            <StartGame startGame={props.actions.startGame}/>
            }
            {props.currentGameState === gameStates.RUNNING && 
                <GameRunning collectedFlags={props.collectedFlags}/>
            }
            {(props.currentGameState === gameStates.WON || props.currentGameState === gameStates.LOST) && 
                <GameEnd/>
            }
            <Link className="link" to="/credits">{'Credits'}</Link>
        </div>
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);