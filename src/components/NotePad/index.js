import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import debounce from 'debounce';
import * as actions from 'actions';

import "./NotePad.scss";

const mapStateToProps = ({ gameState: { notes } }) => ({
  notes
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

class NotePad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: this.props.notes || ''
    }

    this.onChange = this.onChange.bind(this);
    this.updateNotes = debounce(this.updateNotes.bind(this), 250);
  }

  updateNotes(notes) {
    this.props.actions.updateNotes(notes);
  }

  onChange(e) {
    this.setState({notes: e.target.value});
    this.updateNotes(e.target.value);
  }

  render() {
    return (
      <div className="notepad content">
        <div className="body">
          <h1>{'NotePad'}</h1>
          <p>We've provided you a notepad that you can use to securely keep track of any information you find on your mission. These notes will self-destruct when your mission is complete, or if your cover is compromised.</p>
          <textarea value={this.state.notes} onChange={this.onChange} placeholder="Secure Notes Storage" />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotePad);