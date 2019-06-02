import React from 'react';
import './App.scss';
import Home from './components/homepage';
import SideBar from './components/sidebar';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <SideBar />
      <div className="App">
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
