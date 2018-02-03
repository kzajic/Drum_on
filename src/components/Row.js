import React, { Component } from 'react';
import Box from './Box';

class Row extends Component {
      constructor(props) {
        super(props);
      }
    
    render() {
      const rowNumber = this.props.id;
      return (
        <div>
          <div className="board-row">
            {this.props.row.map(function (box, i) { return <Box rowNumber={rowNumber} boxNumber={i} key={i} {...box} />} )}
          </div>
        </div>
      );  
    }
}

export default Row;
