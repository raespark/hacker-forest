import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux';

const mapStateToProps = ({ gameState: { musicEnabled } }) => ({
    musicEnabled
});

const mapDispatchToProps = (dispatch) => ({});

const music = (props) => {
    return (
        <ReactAudioPlayer src={props.src} autoPlay loop muted={!props.musicEnabled} volume={0.5}/>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(music);