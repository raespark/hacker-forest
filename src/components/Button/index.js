import React from 'react';

import classnames from 'classnames';

import "./Button.scss";

const Button = (props) => {
  return <div
            className={classnames('button', {disabled: props.disabled}, props.className)}
            onClick={props.onClick}>
            {props.label}
        </div>
}

export default Button;