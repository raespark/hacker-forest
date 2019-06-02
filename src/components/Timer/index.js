import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import './Timer.scss';

const mapStateToProps = ({ gameState: { timeRemaining } }) => ({
    timeRemaining
});

const mapDispatchToProps = () => ({})

const getSeconds = (timeRemaining) => {
    return (timeRemaining % 60).toString().padStart(2, '0');
}

const getMinutes = (timeRemaining) => {
    return Math.floor(timeRemaining / 60).toString().padStart(2, '0');
}

const timer = (props) => {
    return (
        <div className={classnames("timer", props.className)}>
            <h1>{getMinutes(props.timeRemaining)}<span className="colon"></span>{getSeconds(props.timeRemaining)}</h1>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(timer);