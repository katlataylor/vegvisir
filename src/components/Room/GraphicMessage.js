import React, { Component } from 'react';
import './Room.css';

class Room extends Component {

  accept = () => {
    this.props.setStage(1);
  }


  render() {
    return (
      <div className="GraphicMessage">
        <h1>Stay a Graphic Designer</h1>
        <button onClick={this.accept}> ok </button>
      </div>
    );
  }
}

export default Room;
