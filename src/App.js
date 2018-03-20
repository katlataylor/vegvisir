import React, { Component } from 'react';
import Intro from './components/intro/Intro';
import CatTextBox from './components/CatTextBox';
import Stars from './components/STARS/Stars';
import Room from './components/Room/Room';
import './App.css';
import Rock from './components/Rock/Rock';
import Mapp from './components/Mapp/Mapp';
import { Transition } from 'react-transition-group' // ES6
import Stick from './components/Stick/Stick';
import Watch from './components/Watch/Watch';

const duration = 800;

const defaultStyle = {
  transition: `all ${duration}ms`,
  opacity: 1,
  position: 'absolute',
  left: 200,
  zIndex: 9999,
}

const transitionStyles = {
  entering: { left: 200 },
  entered: { left: 800 }
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={0}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        <h1>Find</h1>
      </div>
    )}
  </Transition>
);

class App extends Component {

  state = {introCounter: 0, stage: 7, animateNorth: false};

  updateIntroCounter = (counter) => {
      this.setState({introCounter: counter})
  }

  setStage = (number) => {
    this.setState({stage: number})
  }

  componentDidMount = () => {
    this.setState({animateNorth: true});
  }


  render() {
    return (

      <div className="App">
        {/*<Fade in={!!this.state.animateNorth} text="find" />*/}
        {(this.state.stage == 1) && <Intro setStage={this.setStage} /> }
        {(this.state.stage == 2) && <Room setStage={this.setStage} /> }
        {(this.state.stage == 3) && <Stars setStage={this.setStage} /> }
        {(this.state.stage == 4) && <Rock setStage={this.setStage} /> }
        {(this.state.stage == 5) && <Mapp setStage={this.setStage} /> }
        {(this.state.stage == 6) && <Stick setStage={this.setStage} /> }
        {(this.state.stage == 7) && <Watch setStage={this.setStage} /> }
        {(this.state.stage == 8) && <h1>bla</h1> }
      </div>
    );
  }
}

export default App;
