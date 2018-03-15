import React, { Component } from 'react';
import Intro from './components/intro/Intro';
import CatTextBox from './components/CatTextBox';
import Stars from './components/STARS/Stars';
import Room from './components/Room/Room';
import './App.css';
import Rock from './components/Rock/Rock';
import Mapp from './components/Mapp/Mapp';

class App extends Component {

  state = {introCounter: 0, stage: 5};

  updateIntroCounter = (counter) => {
      this.setState({introCounter: counter})
  }

  setStage = (number) => {
    this.setState({stage: number})
  }

  render() {
    return (

      <div className="App">
        {(this.state.stage == 1) && <Intro setStage={this.setStage} title="Find north" /> }
        {(this.state.stage == 2) && <Room setStage={this.setStage} /> }
        {(this.state.stage == 3) && <Stars setStage={this.setStage} /> }
        {(this.state.stage == 4) && <Rock setStage={this.setStage} /> }
        {(this.state.stage == 5) && <Mapp setStage={this.setStage} /> }
        {(this.state.stage == 6) && <h1>bla</h1> }
      </div>
    );
  }
}

export default App;
