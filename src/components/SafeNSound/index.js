import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions';

import ScrewdriverDiv from 'components/ScrewdriverDiv';
import SafeLock from 'components/SafeLock';

import './SafeNSound.scss';

const mapStateToProps = ({ gameState: { safeOpenedSafeNSound, safeNSoundCompleted } }) => ({
  safeOpenedSafeNSound,
  safeNSoundCompleted
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

class BrightBulbs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      safeOpened: props.safeOpenedSafeNSound,
      codeEntered: props.safeNSoundCompleted
    };

    this.handleUnlock = this.handleUnlock.bind(this);
    this.handleScrew = this.handleScrew.bind(this);
  }

  handleUnlock() {
    this.setState({codeEntered:true});
    this.props.actions.finishedSafeNSound();
    this.props.actions.collectFlag();
  }

  handleScrew() {
    this.setState({safeOpened: true});
    this.props.actions.openedSafeSafeNSound();
  }

  render () {
    return (
      <div className="safe-n-sound content">
        <div className="header">
          <img className="logo" src="safensound.png" alt="safe n sound logo"/>
        </div>
        <div className="body">
          <div className="safe">
            {!this.state.safeOpened &&
              <ScrewdriverDiv enabled={!this.state.safeOpened} onScrew={this.handleScrew}>
                <img className="safe-image" src="safe.png" alt="a safe"/>
              </ScrewdriverDiv>
            }
            {this.state.safeOpened && 
              <div className="safe-note">
                <p className="safe-note-text">
                  {'How do you greet a lamp? “WATT’s goin on!”'}
                </p>
              </div>
            }
          </div>
          <h1 className="sales-pitch">{'Keep your secrets locked up tight!'}</h1>
          
          <h3 className="sales-pitch">{'Our safes are the safest on the market! Not one screw loose, or a bolt not tightened. ' + 
          'You can sleep soundly knowing all your treasures are SAFE N’ SOUND!'}</h3>

          <div className="lock-display">
            <SafeLock enabled={!this.state.codeEntered} initialValue={this.state.codeEntered ? '7462' : '9999'} unlockValue={this.state.codeEntered ? '0000' : '7462'} onUnlock={this.handleUnlock}/>
          </div>
          
        </div>
      </div>
    )}
}

export default connect(mapStateToProps, mapDispatchToProps)(BrightBulbs);