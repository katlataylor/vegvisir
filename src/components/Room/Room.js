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
        <h1> From where you stand where is the North ? </h1>
        <button onClick={this.nextStage}> correct, go to next </button>
        <button onClick={this.goToFirst}> wrong, go to first </button>
        <img src={fish} onClick={this.goToFirst} />
      </div>
    );
  }
}

export default Room;
