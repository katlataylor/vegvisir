import React, { Component } from 'react';
import './Room.css';

class Room extends Component {

  state = {bla: 'bla'};

  fun = (counter) => {
      this.setState({bla: 'ble'})
  }

  render() {
    return (

      <div className="Room">

      </div>
    );
  }
}

export default Room;
