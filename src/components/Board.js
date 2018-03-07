import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from './Row';


class Board extends Component {
   constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    console.log(this.props);
    return (
      <div className="game">
        <div className="game-board">
           <div>
             {this.props.rows.map(function( row, i ) { return <Row id={i} key={i} {...row} />} )}
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  console.log(state.boxes.rows);
        return { rows: state.boxes.rows };
}

export default connect(mapStateToProps)(Board);