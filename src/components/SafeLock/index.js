import React, { Component } from 'react';
import Digit from './Digit';

import './SafeLock.scss';
import Utils from 'Utils';

class SafeLock extends Component {

    constructor(props) {
        super(props);

        const length = Math.max(props.initialValue.length, props.unlockValue.length);

        this.state = {
            digits: this.parseDigits(props.initialValue, length),
            keyDigits: this.parseDigits(props.unlockValue, length)
        };

        console.log(this.state.digits.length);

        this.onDigitUp = this.onDigitUp.bind(this);
        this.onDigitDown = this.onDigitDown.bind(this);
        this.checkDigits = this.checkDigits.bind(this);
    }

    parseDigits(digitString, length) {
        return digitString
            .padStart(length, "0")
            .substr(0,length)
            .split('')
            .map(digit => Number.parseInt(digit,10))
            .map(digit => isNaN(digit) ? 0 : digit);
    }

    onDigitUp(index) {
        const digit = (this.state.digits[index] + 1) % 10;
        const digits = this.state.digits;
        digits[index] = digit;
        this.setState({digits});

        this.checkDigits(digits);
    }

    onDigitDown(index) {
        const digit = (this.state.digits[index] - 1 + 10) % 10;
        const digits = this.state.digits;
        digits[index] = digit;
        this.setState({digits});

        this.checkDigits(digits);
    }

    checkDigits(digits) {
        for (let i = 0; i < this.props.unlockValue.length; i++) {
            if (digits[i] != this.props.unlockValue[i]){
                return;
            }
        }

        this.props.onUnlock();
    }

    render() {
        return (
            <div className="safe-lock">
                {Utils.range(this.state.digits.length).map(i => 
                    <Digit value={this.state.digits[i]} key={`digit-${i}`} onDigitUp={this.onDigitUp.bind(this,i)} onDigitDown={this.onDigitDown.bind(this,i)}/>
                )}
            </div>
        );
    }
}

export default SafeLock;