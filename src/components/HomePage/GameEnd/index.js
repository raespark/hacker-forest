import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions';
import GameStates from 'content/GameStates';

import Button from 'components/Button';
import Timer from 'components/Timer';
import Flags from 'components/Flags';

import "./GameEnd.scss";

const mapStateToProps = ({ gameState: { currentGameState, timeRemaining, collectedFlags} }) => ({
  currentGameState,
  timeRemaining,
  collectedFlags
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

const GameEnd = (props) => {
  let score = props.currentGameState === GameStates.WON ? 5000 * props.collectedFlags + 150 * props.timeRemaining : 5000 * props.collectedFlags;
  return <div className="game-end">
        <h1 className="final-message">{props.currentGameState === GameStates.WON ? 'CONGRATULATIONS AGENT!' : 'BETTER LUCK NEXT TIME...'}</h1>
        <p>{'You had this much time left:'}</p>
        <Timer/>
        <p>{`And collected ${props.collectedFlags} flags. Did you know there's a total of 6 flags you could find?`}</p>
        <Flags collectedFlags={props.collectedFlags}/>
        <br/>
        <p>{'That means you had a score of...'}</p>
        <h1>{score}</h1>
        <p>{'Thanks for playing!'}</p>
        <Button className='replay-button' label="REPLAY" onClick={() => {props.actions.restartGame()}}/>
  </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(GameEnd);