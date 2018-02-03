import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBox from './TopBox';

class TopRow extends Component {
      constructor(props) {
        super(props);
      }
    
    render() {
      return (
        <div>
          <div className="board-row">
            {this.props.topBoxes.topBoxes.map(function (box, i) { return <TopBox boxNumber={i} key={i} {...box} />} )}
          </div>
        </div>
      );  
    }
}

function mapStateToProps({topBoxes}) {
        return { topBoxes };
}

export default connect(mapStateToProps)(TopRow);
