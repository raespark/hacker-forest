import React from 'react';
import './App.scss';
import Home from 'components/HomePage';
import SideBar from 'components/Sidebar';
import Music from 'components/Music';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Music src="misuse-by-kevin-macleod.ogg" />
      <SideBar />
      <div className="App">
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
