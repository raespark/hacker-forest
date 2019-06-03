import React from 'react';

import { Link } from 'react-router-dom';

import './LifeHacks.scss';

const LifeHacks = (props) => {
  return <div className="life-hacks read-more content">
    <div className="header">
      <h1>LIFE HACKS!</h1>
    </div>
    <div className="body">
      <div className="hack">
        {'To keep reading, please purchase a subscription!'}
      </div>
      <Link className="back-link" to="/lifehacks">{'<- Back'}</Link>
    </div>
  </div>
}

export default LifeHacks;