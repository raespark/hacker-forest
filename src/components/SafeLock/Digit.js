import React from 'react';
import Icofont from 'react-icofont';

export default (props) => {
    const {value, onDigitUp, onDigitDown} = props;
    return (
        <div className="digit">
            <div className="digit-up" onClick={onDigitUp}>
                <Icofont icon="caret-up" size="2" />
            </div>
            <div className="digit-display">{value}</div>
            <div className="digit-down" onClick={onDigitDown}>
                <Icofont icon="caret-down" size="2"/>
            </div>
        </div>
    );
}