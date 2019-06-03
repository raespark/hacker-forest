import React from 'react';

import './Encode.scss';
import {BinaryTranslator, Base64Translator} from 'components/Translator';

const Flags = (props) => {
    return (
      <div className="encode content">
        <div className="header">
          <h1>{'ENCODE'}</h1>
        </div>
        <div className="body">
          <p>{'You can use these translators to encode or decode numbers or messages from different formats!'}</p>
          <BinaryTranslator className="binary-translator"/>
          <Base64Translator className="base64-translator"/>
        </div>
      </div>
    );
}

export default Flags;