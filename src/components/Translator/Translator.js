import React, { Component } from 'react';
import Icofont from 'react-icofont';
import './Translator.scss';

class Translator extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
        this.outputRef = React.createRef();

        this.translateInput = this.translateInput.bind(this)
        this.translateOutput = this.translateOutput.bind(this)
    }

    translateInput() {
        this.outputRef.current.value = this.props.translateInput(this.inputRef.current.value);
    }

    translateOutput() {
        this.inputRef.current.value = this.props.translateOutput(this.outputRef.current.value);
    }

    render() {
        const {inputType, outputType} = this.props;

        return (
            <div className="translator">
                <h3>{inputType} to {outputType} Translator</h3>
                <div className="translator-body">
                    <textarea className="input" ref={this.inputRef} placeholder="Enter your input here...">

                    </textarea>
                    <div className="translator-buttons">
                        <Icofont icon="arrow-right" size={4} onClick={this.translateInput}/>
                        <Icofont icon="arrow-left" size={4} onClick={this.translateOutput}/>
                    </div>
                    <textarea className="output" ref={this.outputRef} placeholder="Output shows up over here!">

                    </textarea>
                </div>
            </div>
        )
    }
}

export default Translator;