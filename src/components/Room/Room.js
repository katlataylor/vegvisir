import React, { Component } from 'react';
import fish from '../../images/fish2.svg';
import GraphicMessage from './GraphicMessage';
import './Room.css';

class Room extends Component {

  state = {graphic: false};

  fun = (counter) => {
      this.setState({bla: 'ble'})
  }

  nextStage = () => {
    this.props.setStage(3);
  }

  goToFirst = () => {
    this.props.setStage(1);

  }

  stayGraphic = () => {
    this.setState({graphic: true})
  }

  render() {
    return (

      <div className="Room">
        {this.state.graphic && <GraphicMessage setStage={this.props.setStage} />}
        <h1 className="title2"> From where you stand where is the North ? </h1>
        <button className="Bfront b1" onClick={this.nextStage}> FRONT </button>
        <button className="Bfront b2" onClick={this.stayGraphic}> BACK </button>
        <button className="Bfront b3" onClick={this.stayGraphic}> LEFT </button>
        <button className="Bfront b4" onClick={this.stayGraphic}> RIGHT </button>

      </div>
    );
  }
}

export default Room;
