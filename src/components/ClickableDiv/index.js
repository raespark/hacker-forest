import React, {Component} from 'react';

class ClickableDiv extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({clicked: true});
    if(this.props.onClick && typeof(this.props.onClick) === 'function'){
      this.props.onClick();
    }
  }

  render (){
    return <div onClick={this.state.clicked? ()=>{} : this.handleClick}>
        {this.props.children}
      </div>
  }
}

export default ClickableDiv;