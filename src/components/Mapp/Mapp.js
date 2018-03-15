import React, { Component } from 'react';
import './Mapp.css';
import dot from '../../images/dot.png';
import carte from '../../images/carte.jpg';

class Mapp extends Component {


state = {mapp: [

  {
    position: 'absolute',
    top: 20,
    left: 200,
    width: '20px'
  },
  {
    position: 'absolute',
    top: 150,
    left: 500,
    width: '20px'
  },
  {
    position: 'absolute',
    top: 150,
    left: 800,
    width: '20px'
  }
]};

componentDidMount() {
}


fun = (counter) => {
    this.setState({bla: 'ble'})
}

dotClick = () => {
  this.props.setStage(1);
}

dotCorrect = () => {
  this.props.setStage(6);
}

render() {
  const { anim } = this.state;
  return (
    <div className="Mapp">
      {this.state.mapp.map(item => (
        <img onClick={this.dotClick} src={dot} style={item} alt="dot" />
      ))}
      <img onClick={this.dotCorrect} src={dot} style={{
            position: 'absolute',
            top: 10,
            left: 600,
            width: '20px'
          }} alt="dot" />
      <img src={carte}alt="carte"/>
    </div>
  );
}
}

export default Mapp;
