import React, { Component } from 'react';
import { connect } from 'react-redux';
import {checkBox} from '../actiones/index';

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let rowIndex = this.props.rowNumber;
    let boxIndex = this.props.boxNumber;
    this.props.checkBox(rowIndex, boxIndex);
  }
  
  render() {
  return ( 
    <div className={`box 
                    box-color_${this.props.boxNumber}
                    ${this.props.boxes.rows[this.props.rowNumber].row[this.props.boxNumber][0].active ? 'box-active' : 'box-inactive'}`} 
         onClick = {this.handleClick}>
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkBox: (rowIndex, boxIndex) => dispatch(checkBox(rowIndex, boxIndex))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Box);