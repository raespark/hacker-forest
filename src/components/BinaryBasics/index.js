import React from 'react';

import './BinaryBasics.scss';

const BinaryBasics = (props) => {
  return <div className="binary-basics content">
    <div className="bordered-area">
      <div className="header">
        <h1>{'BINARY BASICS!'}</h1>
      </div>
      <div className="body">
        <h3>{'What is '}<span className="clue">{'B'}</span>{'inary?'}</h3>
        <p className="description">
          {'Binary is often used to encode information as it\'s easy for a computer to process and understand. ' + 
          'Binary, also known as base 2, encodes information into a series of bits, which can either hold a 1 or a 0. ' + 
          'A 0 can represent the lack of information, but can also represent a value that is “false”, “off” or “deactivated”. ' + 
          'A 1 can represent the presence of information, or a value that is “true”, “on” or “activated”. So a string of binary might look something like this:'}
        </p>
        <p className="example">
        {'0 1 1 0 1 0'}
        </p>
        <p className="description">
          {'Nifty!'}
        </p>
        <h3>{'What does it mean?'}</h3>
        <p className="description">{'Since binary is “encoded” data how is it encoded and how do we decode it to find it secrets? Well to put it simply, ' + 
        'each bit in a string of binary represents a power of 2: 2^0, 2^1, 2^2, 2^3 and so on. So for example, '}</p>
        <p className="example">
          {'1 1 1 1 ='}
        </p>
        <p className="example">
          {'2^'}<span className="clue">{'3'}</span>{'  2^2  2^1  2^0'}
        </p>
        <p className="description">
          <span className="clue">{'A'}</span>{'nd in order to decode a string of binary, you add up the values that you get from those powers of 2:'}
        </p>
        <p className="example">
          {'1 0 1 1 ='}
        </p>
        <p className="example">
          {'(1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (1* 2^0) = '}
        </p>
        <p className="example">
          {'8 + 2 + 1 ='}
        </p>
        <p className="example">
          {'11'}
        </p>
        <p className="description">
          <span className="clue">{'C'}</span>{'atch all that? '}<span className="clue">{'H'}</span>{'ere let’s try another example...'}
        </p>
        <p className="example">
          {'1 0 1 1 0 1 ='}
        </p>
        <p className="example">
          {'(1 * 2^5) + (0 * 2^4) + (1 * 2^3) + (1 * 2^2) + (0 * 2^1) + (1 * 2^0) ='}
        </p>
        <p className="example">
          {'32 + 8 + 4 + 1 ='}
        </p>
        <p className="example">
          {'45'}
        </p>
        <p className="description">
          {'And if you wanna give it a shot here’s a challenge for you!'}
        </p>
        <p className="example">
          {'1 1 1 0 1 0 0 1 0 0 1 1 0'}
        </p>
        <p className="description">
            <span className="clue">{'B'}</span>{'ut don\'t go cheating with a binary tranlsator!'}
        </p>
        <p className="description">
          {'Similarly, you can also translate binary into words! Using the index of a letter in the alphabet (i.e '}<span className="clue">{'A'}</span>{' = 1, Z = 26) ' +
          'you can encode that number into binary and hide secret messages in plain sight!'}
        </p>
        <p className="example">
          <span className="clue">{'1'}</span>{' 0 0 '}<span className="clue">{'1'}</span>{' 1 = '}
        </p>
        <p className="example">
          {'19 ='}
        </p>
        <p className="example">
         {'S'}
        </p>
        <p className="description">
          {'Try it out sometime and baffle your friends!'}
        </p>
      </div>
    </div>
  </div>
}

export default BinaryBasics;