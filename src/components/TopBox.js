import React, { Component } from 'react';
import { connect } from 'react-redux';
import {playBox} from '../actiones/index';

class TopBox extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.play = false
  }

  handleClick() {
    let boxIndex = this.props.boxNumber;
    this.play = !this.play;
    this.props.playBox(boxIndex);
  }
  
  render() {
    return (
      <div className={`box top-box top-box-color_${this.props.boxNumber}`} onClick = {this.handleClick}></div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playBox: (boxIndex) => dispatch(playBox(boxIndex))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBox);