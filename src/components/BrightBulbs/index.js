import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions';

import ScrewdriverDiv from 'components/ScrewdriverDiv';
import DraggableDiv from 'components/Draggable/DraggableDiv';
import DroppableDiv from 'components/Draggable/DroppableDiv';
import PasswordBox from 'components/PasswordBox';

import './BrightBulbs.scss';

const mapStateToProps = ({ gameState: { lampFixedBrightBulb, brightBulbLampsCompleted, brightBulbMessageCompleted } }) => ({
  brightBulbLampsCompleted,
  brightBulbMessageCompleted,
  lampFixedBrightBulb
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

class BrightBulbs extends Component {

  constructor(props) {
    super(props);

    this.correctLampState = [false,true,true,false,true,false];

    this.state = {
      lampState: props.brightBulbLampsCompleted ? this.correctLampState : [false,false,false,false,false,false],
      looseBulb: props.lampFixedBrightBulb,
      lampFixed: props.lampFixedBrightBulb,
      solvedLamps: props.brightBulbLampsCompleted
    };

    this.handleScrew = this.handleScrew.bind(this);
    this.handleLampClicked = this.handleLampClicked.bind(this);
    this.handleLampDrop = this.handleLampDrop.bind(this);
    this.handlePasswordEntered = this.handlePasswordEntered.bind(this);
  }

  handleScrew() {
    this.setState({looseBulb: true});
  }

  handleLampClicked(index) {
    if(!this.state.solvedLamps){
      let lampState = this.state.lampState;
      lampState[index] = !this.state.lampState[index];
      this.setState({lampState});
      let checkLampState = true;
      lampState.forEach((lamp, i) => {
        if(lamp !== this.correctLampState[i]){
          checkLampState = false;
        }
      });
      if(checkLampState) {
        this.props.actions.finshedBrightBulbLamps();
        this.props.actions.collectFlag();
        this.setState({solvedLamps: true});
      }
    }
  }

  handleLampDrop(id) {
    if (id === 'bulb') {
      this.props.actions.lampFixedBrightBulb();
      this.setState({lampFixed: true});
    }
  }

  handlePasswordEntered() {
    this.props.actions.finishedBrightBulbMessage();
    this.props.actions.collectFlag();
  }

  render () {
    return (
      <div className="bright-bulbs content">
        <div className="header">
          {!this.state.looseBulb &&
            <ScrewdriverDiv enabled={!this.state.looseBulb} onScrew={this.handleScrew}>
              <img draggable="false" className="logo" src="brightbulb.png" alt="logo for bright bulb"/>
            </ScrewdriverDiv>
          }
          {this.state.looseBulb && 
            <div className="bulb-removed">
              {!this.state.lampFixed &&
                <DraggableDiv enabled={true} draggableId="bulb">
                <img className="logo-bulb" src="brightbulb-bulb.png" alt= "bulb from logo"/>
                </DraggableDiv>
              }
              <img draggable="false" className="logo" src="brightbulb-sansbulb.png" alt = "logo for bright bulb without the bulb"/>
            </div>
          }
          {}
        </div>
        <div className="body">
          <div className="lamps">
            <div onClick={() => {this.handleLampClicked(0)}}>
              <img draggable="false" className="lamp" src={this.state.lampState[0] ? 'lampOn.png' : 'lampOff.png' } alt="lamp off"/>
            </div>
            <div onClick={() => {this.handleLampClicked(1)}}>
              <img draggable="false" className="lamp" src={this.state.lampState[1] ? 'lampOn.png' : 'lampOff.png' } alt="lamp off"/>
            </div>
            <div onClick={() => {this.handleLampClicked(2)}}>
              <img draggable="false" className="lamp" src={this.state.lampState[2] ? 'lampOn.png' : 'lampOff.png' } alt="lamp off"/>
            </div>
            <div onClick={() => {this.handleLampClicked(3)}}>
              <img className="lamp" src={this.state.lampState[3] ? 'lampOn.png' : 'lampOff.png' } alt="lamp off"/>
            </div>
            <DroppableDiv enabled={!this.state.lampFixed} onDrop={this.handleLampDrop}>
              <div onClick={this.state.lampFixed ? () => {this.handleLampClicked(4)} : () => {}}>
                <img draggable="false" className="lamp" src={this.state.lampState[4] ? 'lampOn.png' : 'lampOff.png' } alt="lamp off"/>
              </div>
            </DroppableDiv>
            <div onClick={() => {this.handleLampClicked(5)}}>
              <img draggable="false" className="lamp" src={this.state.lampState[5] ? 'lampOn.png' : 'lampOff.png' } alt="lamp off"/>
            </div>
          </div>
          <p>Our lamps will be the</p>
          <p className="highlight">HIGHLIGHT</p>
          <p>of any room!</p>
          <p className="invisible">All your base are 64<br />Q2xpY2sgb24gYWxsIHRoZSBDYXRz</p>
          <p>You’ll find yourself positively delighted about our quality, selection, and prices!</p>
          <p className="small">Unfortunately, our store is not currently open for orders.</p>
          <p className="small">But if you’d like to send us a message, it would not only light up our day, but we’ll also try to get back to you as soon as we can. Much love to our loving and supportive Bright Bulbs!</p>
          <PasswordBox 
            className="message" 
            multiline={true} 
            enabled={!this.props.brightBulbMessageCompleted}
            password={'How do you greet a lamp? “WATT’s goin on!”'}
            correctPasswordEntered={this.handlePasswordEntered}/>
        </div>
      </div>
    )}
}

export default connect(mapStateToProps, mapDispatchToProps)(BrightBulbs);