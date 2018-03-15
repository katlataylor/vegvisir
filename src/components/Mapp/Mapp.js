import React, { Component } from 'react';
import './Mapp.css';
import dot from '../../images/dot.png';
import carte from '../../images/land.jpg';
import { Transition } from 'react-transition-group' // ES6

const duration = 1000;

const defaultLandStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  display: 'inline-block',
  backgroundColor: '#8787d8'
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
}

const FadeLandScape = ({ in: inProp }) => (
  <Transition in={inProp} timeout={0}>
    {(state) => (
      <div style={{
        ...defaultLandStyle,
        ...transitionStyles[state]
      }}>
        <img key="img" className="land" src={carte} alt="land"/>
      </div>
    )}
  </Transition>
);


class Mapp extends Component {


state = {
  landvisible: false,
  mapp: [
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
  //go back to first stage if user clicks wrong image
  this.props.setStage(1);
}

dotCorrect = () => {
  this.props.setStage(6);
}

toggleLand = () => {
  this.setState({landvisible: !this.state.landvisible})
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
      <FadeLandScape in={!!this.state.landvisible} />
      <button style={{
        position: 'absolute',
        top: 5,
        left:50
      }} onClick={this.toggleLand}>map</button>
    </div>
  );
}
}

export default Mapp;
