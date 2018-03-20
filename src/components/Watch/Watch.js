import React, { Component } from 'react';
import './Watch.css';
import clock from '../../images/clock.png'

class Watch extends Component {

  state = {bla: 'bla'};

  fun = (counter) => {
      this.setState({bla: 'ble'})
  }

  nextStage = () => {
    this.props.setStage(8);
  }

  goToFirst = () => {
    this.props.setStage(1);

  }

  render() {
    return (

      <div className="Watch">
        <button className="Dfront D4" onClick={this.nextStage}> NORTH </button>
        <button className="Dfront D2" onClick={this.goToFirst}> NORTH </button>
        <button className="Dfront D3" onClick={this.goToFirst}> NORTH </button>
        <button className="Dfront D1" onClick={this.goToFirst}> NORTH </button>
        <div className="ClockContainer">
          <img className="Clock" src={clock} alt="clock"/>
        </div>
      </div>
    );
  }
}

export default Watch;
