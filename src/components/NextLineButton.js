import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NextLine} from '../actiones/index';

class NextLineButton extends Component {
 constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.NextLine();
  }
  
  render() {
  return (
    <div className="button-play" onClick = {this.handleClick}><i class="fas fa-angle-double-down"></i></div>
  );
  }
}


const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    NextLine: () => dispatch(NextLine())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextLineButton);