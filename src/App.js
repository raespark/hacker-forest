import React from 'react';

import Home from 'components/HomePage';
import BinaryBasics from 'components/BinaryBasics';
import LifeHacks from 'components/LifeHacks';
import ReadMore from 'components/LifeHacks/ReadMore';

import SideBar from 'components/Sidebar';
import Music from 'components/Music';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ToolContainer from 'components/ToolContainer';

import './App.scss';


function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Music src="misuse-by-kevin-macleod.ogg" />
      <SideBar />
      <div className="App">
        <ToolContainer>
          <Route exact path="/" component={Home} />
          <Route exact path="/binary" component={BinaryBasics}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/binary" component={BinaryBasics}/>
          <Route exact path="/lifehacks" component={LifeHacks}/>
          <Route exact path="/lifehacks/read-more" component={ReadMore}/>
        </ToolContainer>
      </div>
    </Router>
  );
}

export default App;
