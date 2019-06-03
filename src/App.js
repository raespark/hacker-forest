import React from 'react';
import ScrollToTop from 'components/ScrollToTop';

import Home from 'components/HomePage';
import BinaryBasics from 'components/BinaryBasics';
import LifeHacks from 'components/LifeHacks';
import ReadMore from 'components/LifeHacks/ReadMore';
import GhostTown from 'components/GhostTown';
import Encode from 'components/Encode';

import SideBar from 'components/Sidebar';
import Music from 'components/Music';
import FlagPopup from 'components/FlagPopup';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ToolContainer from 'components/ToolContainer';

import './App.scss';


function App() {
  return (
    <Router>
      <Music src="misuse-by-kevin-macleod.ogg" />
      <SideBar />
      <ScrollToTop>
        <div className="App">
          <ToolContainer>
            <Route exact path="/" component={Home} />
            <Route exact path="/binary" component={BinaryBasics}/>
            <Route exact path="/lifehacks" component={LifeHacks}/>
            <Route exact path="/lifehacks/read-more" component={ReadMore}/>
            <Route exact path="/ghosttown" component={GhostTown}/>
            <Route exact path="/encode" component={Encode}/>
          </ToolContainer>
          <FlagPopup />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
