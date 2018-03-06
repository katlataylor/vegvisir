import React, { Component } from 'react';
import Intro from './components/intro/Intro';
import CatTextBox from './components/CatTextBox';
import Room from './components/Room/Room';
import './App.css';

class App extends Component {

  state = {introCounter: 0, stage: 1};

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
        {(this.state.stage == 3) && <h2>stageasdfæj</h2> }
      </div>
    );
  }
}

export default App;
