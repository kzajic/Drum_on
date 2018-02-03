import React, { Component } from 'react';
import { connect } from 'react-redux';
import {playDrum} from '../actiones/index';

class PlayButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.playDrum();
  }
  
  render() {
  return (
    <div className="button-play" onClick = {this.handleClick}>Play</div>
  );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playDrum: () => dispatch(playDrum())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);