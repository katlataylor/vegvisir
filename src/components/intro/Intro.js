import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {

  state = {top: 500, right: 400, counter: 0}

  handleClick = () => {
    this.setState({
      top: Math.floor(Math.random() * 500),
      right: Math.floor(Math.random() * 500),
      counter: this.state.counter + 1 });
    if(this.state.counter == 2) {
      this.props.setStage(2);
    }
  }

  render() {
    return (
      <div className="Intro">
        <h1>{this.props.title}</h1>
        <div
          style={{
            position: 'absolute',
            top: this.state.top,
            right: this.state.right
          }}
          onClick={this.handleClick}
          className="box" >
          Here
        </div>
        <p style={{'font-size': this.state.counter*10}}>{this.state.counter}</p>
        <h1 className="title"> FIND NORTH </h1>


      </div>
    );
  }
}

export default Intro;
