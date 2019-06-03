import React from 'react';
import {Link} from 'react-router-dom';

import "./Credits.scss";

const Credits = (props) => {
  return (
    <div className="content">
      <div className="game-credits">
          <div className="header">
            <h1>{'CREDITS'}</h1>
          </div>
          <div className="body">
            <div className="credit">
              <h3>{'Art, Design, Sub-Site Programmer:'}</h3>
              <h4>{'Raespark'}</h4>
            </div>
            <div className="credit">
              <h3>{'Lead Programmer:'}</h3>
              <h4>{'Oelderoth'}</h4>
            </div>
            <div className="credit">
              <h3>{'Music:'}</h3>
              <h4>{'"Misuse" By Kevin Macleod (Incompetech)'}</h4>
            </div>
            <Link className="link" to="/">{'<- Back'}</Link>
          </div>
        </div>
    </div>
  )
}

export default Credits;