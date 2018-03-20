import React, { Component } from 'react';
import './Stick.css';

class Stick extends Component {

  state = {bla: 'bla'};

  fun = (counter) => {
      this.setState({bla: 'ble'})
  }

  nextStage = () => {
    this.props.setStage(7);
  }

  goToFirst = () => {
    this.props.setStage(1);

  }

  render() {
    return (

      <div className="Stick">
        <button className="Cfront C1" onClick={this.nextStage}> NORTH </button>
        <button className="Cfront C2" onClick={this.goToFirst}> NORTH </button>
        <button className="Cfront C3" onClick={this.goToFirst}> NORTH </button>
        <button className="Cfront C4" onClick={this.goToFirst}> NORTH </button>

      </div>
    );
  }
}

export default Stick;
