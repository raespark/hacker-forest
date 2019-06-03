import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions';

import ClickableDiv from 'components/ClickableDiv';
import PasswordBox from 'components/PasswordBox';

import './PetParade.scss';

const mapStateToProps = ({ gameState: { petParadeCatsCompleted, petParadePasswordCompleted } }) => ({
  petParadeCatsCompleted,
  petParadePasswordCompleted
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

class GhostTown extends Component {

  constructor(props) {
    super(props);

    this.state = {
      catsClicked: [false,false,false,false,false,false,false,false],
      solvedPassword: props.petParadePasswordCompleted,
      solvedCats: props.petParadeCatsCompleted
    };

    this.handleCatClicked = this.handleCatClicked.bind(this);
    this.handlePasswordEntered = this.handlePasswordEntered.bind(this);
  }

  handleCatClicked(index) {
    let catsClicked = this.state.catsClicked;
    catsClicked[index] = true;
    let clicked = true;
    catsClicked.forEach((cat) => {
      clicked = clicked & cat;
    });
    if(clicked && ! this.state.solvedCats) {
      this.setState({solvedCats: true});
      this.props.actions.finishedPetParadeCats();
      this.props.actions.collectFlag();
    }
    else {
      this.setState({catsClicked});
    }
  }

  handlePasswordEntered() {
    this.setState({solvedPassword: true});
    this.props.actions.finishedPetParadePassword();
    this.props.actions.collectFlag();
  }

  render () {
    return (
      <div className="pet-parade content">
        <div className="header">
          <img className="logo" src="petParade.png" alt="logo for pet parade"/>
        </div>
        <div className="body">
          <div className="pets">
            <img className="pet dog" src="dog.png" alt="dog"/>
            <ClickableDiv onClick={() => {this.handleCatClicked(0)}}>
              <img className="pet cat" src="cat.png" alt="cat"/>
            </ClickableDiv>
            <img className="pet dog" src="dog.png" alt="dog"/>
            <ClickableDiv onClick={() => {this.handleCatClicked(1)}}>
              <img className="pet cat" src="cat.png" alt="cat"/>
            </ClickableDiv>
            <img className="pet dog" src="dog.png" alt="dog"/>
            <ClickableDiv onClick={() => {this.handleCatClicked(2)}}>
              <img className="pet cat" src="cat.png" alt="cat"/>
            </ClickableDiv>
            <img className="pet dog" src="dog.png" alt="dog"/>
            <ClickableDiv onClick={() => {this.handleCatClicked(3)}}>
              <img className="pet cat" src="cat.png" alt="cat"/>
            </ClickableDiv>
          </div>

          <div className="login">
            <h2>{'Admin Log-in:'}</h2>
            <p>{'hint: what\'s Seal\'s favorite toy?'}</p>

            <PasswordBox enabled={!this.state.solvedPassword} password="B3ACHBA11" correctPasswordEntered={this.handlePasswordEntered}/>
          </div>

          <div className="pets">
            <img className="pet dog" src="dog.png" alt="dog"/>
            <ClickableDiv onClick={() => {this.handleCatClicked(4)}}>
              <img className="pet cat" src="cat.png" alt="cat"/>
            </ClickableDiv>
            <img className="pet dog" src="dog.png" alt="dog"/>
            <ClickableDiv onClick={() => {this.handleCatClicked(5)}}>
              <img className="pet cat" src="cat.png" alt="cat"/>
            </ClickableDiv>
            <img className="pet dog" src="dog.png" alt="dog"/>
            <ClickableDiv onClick={() => {this.handleCatClicked(6)}}>
              <img className="pet cat" src="cat.png" alt="cat"/>
            </ClickableDiv>
            <img className="pet dog" src="dog.png" alt="dog"/>
            <ClickableDiv onClick={() => {this.handleCatClicked(7)}}>
              <img className="pet cat" src="cat.png" alt="cat"/>
            </ClickableDiv>
          </div>
        </div>
      </div>
    )}
}

export default connect(mapStateToProps, mapDispatchToProps)(GhostTown);