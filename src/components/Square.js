import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {'color': 'white'}
    console.log(this.state.color)
    console.log(props);
  }

  handleClick() {
    //square.props.color = 'blue';
    console.log(this.props.rowNumber)
    console.log(this.props.squareNumber)
    this.setState({
      color: 'blue'
    });
  }
  
  render() {

  return (
    <div className="square" onClick = {this.handleClick} style={{backgroundColor:this.state.color}}>
    </div>
  );
  }
}

export default Square;