import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions';

import StartGame from './StartGame/StartGame';
import GameRunning from './GameRunning/GameRunning';

import "./homepage.scss";

const mapStateToProps = ({ gameState: {collectedFlags ,isGameActive}}) => ({
    collectedFlags,
    isGameActive
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})

const HomePage = (props) => {
    return <div className="home">
        <div className="content">
            {!props.isGameActive && <StartGame startGame={props.actions.startGame}/>}
            {props.isGameActive && <GameRunning flagsRemaining={Math.max(5 - props.collectedFlags, 0)}/>}
        </div>
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);