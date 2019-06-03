import React, {Component} from 'react';

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
    console.log(this.state.input);
    console.log(this.props.password);
    console.log(this.state.input.trim() === this.props.password.trim())
    if(this.state.input.trim() === this.props.password.trim()) {
      this.props.correctPasswordEntered();
    }
    else {
      this.setState({input: ''});
    }
  }

  render() {
    return (
      <div className={'password-box ' + this.props.className}>
        <input className="password-input" value={this.state.input} onChange={this.handleChange} readOnly={!this.props.enabled}/>
        <Button className="password-submit-button" disabled={!this.props.enabled} label="submit" onClick={this.checkPassword}/>
      </div>
    )}
}

export default PasswordBox;