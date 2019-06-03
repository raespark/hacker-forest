import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import * as actions from 'actions';

import ZapperDiv from 'components/ZapperDiv';
import PasswordBox from 'components/PasswordBox';

import './GhostTown.scss';

const mapStateToProps = ({ gameState: { ghostTownCompleted } }) => ({
  ghostTownCompleted
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

class GhostTown extends Component {

  constructor(props) {
    super(props);

    this.state = {
      zapped: props.ghostTownCompleted,
      solved: props.ghostTownCompleted
    };

    this.handleSandZap = this.handleSandZap.bind(this);
    this.handlePasswordEntered = this.handlePasswordEntered.bind(this);
  }

  handlePasswordEntered() {
    this.setState({solved: true});
    this.props.actions.finishedGhostTown();
    this.props.actions.collectFlag();
  }

  handleSandZap() {
    this.setState({zapped: true});
  }

  render (){
    return (
      <div className="ghost-town content">
        <div className="header">
          <img className="logo" src="ghosttown.png" alt="logo for ghost town"/>
        </div>
        <div className="body">
          <div className="body-text">
            <p>
              {'Nothin’ to see here'}
            </p>
            <p className="hidden">
              {'A bolt of lightnin’ will clear the sand, and “tumbleweed” will carry you to the promised land'}
            </p>
          </div>
          <ZapperDiv enabled={!this.props.zapped} onZap={this.handleSandZap}>
            <img className={classnames('sand', {zapped: this.state.zapped})} src="ghostTownSand.png" alt="desert sand"/>
          </ZapperDiv>
          <PasswordBox
            enabled={!this.state.solved} 
            className={classnames("ghost-town-password", {zapped: this.state.zapped})}
            password = "tumbleweed"
            correctPasswordEntered={this.handlePasswordEntered}/>
        </div>
      </div>
    )}
}

export default connect(mapStateToProps, mapDispatchToProps)(GhostTown);