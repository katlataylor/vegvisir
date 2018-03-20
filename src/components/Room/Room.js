import React, { Component } from 'react';
import fish from '../../images/fish2.svg';
import './Room.css';

class Room extends Component {

  state = {bla: 'bla'};

  fun = (counter) => {
      this.setState({bla: 'ble'})
  }

  nextStage = () => {
    this.props.setStage(3);
  }

  goToFirst = () => {
    this.props.setStage(1);

  }

  render() {
    return (

      <div className="Room">
        <h1 className="title2"> From where you stand where is the North ? </h1>
        <button className="Bfront b1" onClick={this.nextStage}> FRONT </button>
        <button className="Bfront b2" onClick={this.goToFirst}> BACK </button>
        <button className="Bfront b3" onClick={this.goToFirst}> LEFT </button>
        <button className="Bfront b4" onClick={this.goToFirst}> RIGHT </button>

      </div>
    );
  }
}

export default Room;
