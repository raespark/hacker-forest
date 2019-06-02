import React from 'react';

import Button from 'components/Button';

import "./StartGame.scss";

const StartGame = (props) => {
  return <div className="start-game">
    <div className="header">
        <h1 className="cursor">{'WELCOME TO HACKER-FOREST'}</h1>
    </div>
    <div className="body">
        <p>
            {
                'Your mission is to '} <span className="underlined">{'find all the flags'}</span>{' hidden accross ' +
                'the sites provided to you. We\'ve been able to conceal your presence from trackers, but you\'ll only have '} <span className="underlined">{'10 minutes,'}</span>{' before your cover is compromised.'
            }
        </p>
        <p> 
            {
                'There are a number of tools available to you, which you can see on your hacker-forest tool bar to the left. Each tool serves a specific purpose.'
            } 
        </p>
        <ul>
                <li><span className="underlined">{'ZAPPER'}</span> {': The zapper (or lightning bolt) can be used to zap specific parts of sites trying to hide dirty secrets where no scrollbar can reach. '}</li>
                <li><span className="underlined">{'SCREWDRIVER'}</span> {': The screwdriver can be used to loosen up certain places to find what lies within. '}</li>
                <li><span className="underlined">{'TUNES'}</span> {': The most important tool of all, you can mute or unmute some bumpin tunes to help get you in the'} <i>{'zone.'}</i> {'(If you can\'t hear it, you may need to enable autoplaying music in your browser.)'}</li>
        </ul>
        
        <p className="subtitle">
            {'(I guess your wit\'s also a tool you\'ll need but, we couldn\'t very well come up with a logo and catchy title for that now can we? So just keep your wits about ya and let\'s get going.)'}
        </p>
        <br/>
        <br/>
        <div>{'Whenever you\'re ready to begin press the start button below.'}</div>
        <p>{'Good luck agent.'}</p>
        <Button className="start-game-button" label="START" onClick={props.startGame}/>
    </div>
  </div>
}

export default StartGame;