import React from 'react';

import Home from 'components/HomePage';
import BinaryBasics from 'components/BinaryBasics';

import SideBar from 'components/Sidebar';
import Music from 'components/Music';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ToolContainer from 'components/ToolContainer';

import './App.scss';


function App() {
  return (
    <Router>
      <Music src="misuse-by-kevin-macleod.ogg" />
      <SideBar />
      <div className="App">
        <ToolContainer>
          <Route exact path="/" component={Home} />
          <Route exact path="/binary" component={BinaryBasics}/>
        </ToolContainer>
      </div>
    </Router>
  );
}

export default App;
