import React from 'react';
import Translator from './Translator';

const translateBase64ToString = (base64) => {
    try {
        return atob(base64);
    } catch (e) {
        return "That's not valid Base64!"
    }
}

const translateStringToBase64 = (str) => {
    return btoa(str);
}

export default () => {
    return (
        <Translator inputType="Base64" outputType="Text" translateInput={translateBase64ToString} translateOutput={translateStringToBase64}/>
    );
}