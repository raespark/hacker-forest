import React from 'react';

import Button from 'components/Button';
import Timer from 'components/Timer';
import Flags from 'components/Flags';

import "./GameRunning.scss";

const GameRunning = (props) => {
  let flagsRemaining = Math.max(5 - props.collectedFlags, 0);
  return <div className="game-running">
        <h1 className="return-with-flags">{'RETURN HERE WITH AT LEAST 5 FLAGS...'}</h1>
        <Timer/>
        <Flags collectedFlags={props.collectedFlags}/>
        <h3 className="remaining-flags">{`You have ${flagsRemaining} flags remaining.`}</h3>
        <Button className="end-game-button" disabled={flagsRemaining !== 0} label="COMPLETE" onClick={() => {}}/>
  </div>
}

export default GameRunning;