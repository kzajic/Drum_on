import React, { Component } from 'react';
import Square from './Square';

class Row extends Component {
      constructor(props) {
        super(props);
      }
    
    render() {
      const rowNumber = this.props.id;
      return (
        <div>
          <div className="board-row">
            {this.props.squares.map(function (square, i) { return <Square rowNumber={rowNumber} squareNumber={i} key={i} {...square} />} )}
          </div>
        </div>
      );  
    }
}

export default Row;
