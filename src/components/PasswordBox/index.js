import React, {Component} from 'react';
import classnames from 'classnames';

import './PasswordBox.scss';
import Button from 'components/Button';

class PasswordBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: props.enabled ? '' : props.password
    };

    this.checkPassword = this.checkPassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  checkPassword() {
    if(this.state.input.trim() === this.props.password.trim()) {
      this.props.correctPasswordEntered();
    }
    else {
      this.setState({input: ''});
    }
  }

  render() {
    return (
      <div className={classnames('password-box', {multiline: this.props.multiline},this.props.className)}>
        {!this.props.multiline && <input className="password-input" value={this.state.input} onChange={this.handleChange} readOnly={!this.props.enabled}/>}
        {this.props.multiline && <textarea className="password-input" value={this.state.input} onChange={this.handleChange} readOnly={!this.props.enabled}/>}
        <Button className="password-submit-button" disabled={!this.props.enabled} label="Submit" onClick={this.checkPassword}/>
      </div>
    )}
}

export default PasswordBox;