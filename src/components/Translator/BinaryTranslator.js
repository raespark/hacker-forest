import React from 'react';
import Translator from './Translator';

const translateBinaryToDecimal = (binary) => {
    const isBinary = /^[01\s]+$/;
    if (!isBinary.test(binary)) {
        return "That's not valid binary! Remember: 1's and 0's only!"
    }
    const trimmedInput = binary.replace(/\s/g,'');
    return Number.parseInt(trimmedInput,2).toString(10);
}

const translateDecimalToBinary = (decimal) => {
    const isDecimal = /^[\d,\s]+$/;
    if (!isDecimal.test(decimal)) {
        return "That's not a number! Remember: 0 through 9 only!"
    }
    const trimmedInput = decimal.replace(/[\s,]/g,'');
    return Number.parseInt(trimmedInput,10).toString(2);
}

export default () => {
    return (
        <Translator inputType="Binary" outputType="Decimal" translateInput={translateBinaryToDecimal} translateOutput={translateDecimalToBinary}/>
    );
}