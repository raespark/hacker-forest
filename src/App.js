import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';

import ScrollToTop from 'components/ScrollToTop';
import ToolContainer from 'components/ToolContainer';
import ProtectedRoute from 'components/ProtectedRoute';
import Home from 'components/HomePage';
import BinaryBasics from 'components/BinaryBasics';
import LifeHacks from 'components/LifeHacks';
import ReadMore from 'components/LifeHacks/ReadMore';
import GhostTown from 'components/GhostTown';
import Encode from 'components/Encode';
import PetParade from 'components/PetParade';
import BrightBulb from 'components/BrightBulbs';

import SideBar from 'components/Sidebar';
import Music from 'components/Music';
import FlagPopup from 'components/FlagPopup';

import GameStates from 'content/GameStates';

import './App.scss';

const mapStateToProps = ({  gameState: {currentGameState} }) => ({
  currentGameState
});

function App(props) {
  const isGameRunning = props.currentGameState === GameStates.RUNNING;

  return (
    <Router>
      <Music src="misuse-by-kevin-macleod.ogg" />
      <SideBar />
      <ScrollToTop>
        <div className="App">
          <ToolContainer>
            <Route exact path="/" component={Home} />

            <ProtectedRoute exact authed={isGameRunning} path="/binary" component={BinaryBasics}/>
            <ProtectedRoute exact authed={isGameRunning} path="/lifehacks" component={LifeHacks}/>
            <ProtectedRoute exact authed={isGameRunning} path="/lifehacks/read-more" component={ReadMore}/>
            <ProtectedRoute exact authed={isGameRunning} path="/ghosttown" component={GhostTown}/>
            <ProtectedRoute exact authed={isGameRunning} path="/encode" component={Encode}/>
            <ProtectedRoute exact authed={isGameRunning} path="/petparade" component={PetParade}/>
            <ProtectedRoute exact authed={isGameRunning} path="/brightbulbs" component={BrightBulb}/>
          </ToolContainer>
          <FlagPopup />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default connect(mapStateToProps)(App);
