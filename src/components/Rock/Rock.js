import React, { Component } from 'react';
import './Rock.css';
import rock1 from '../../images/rock1.png';
import rock2 from '../../images/rock2.png';
import rock3 from '../../images/rock3.png';
import rock4 from '../../images/rock4.png';



class Rock extends Component {

  state = {Rock: [
    {
      style: {
        position: 'absolute',
        top: 20,
        left: 200,
        width: '50px'
      },
      image: rock1

    },
    {
      style: {
        position: 'absolute',
        top: 150,
        left: 500,
        width: '50px'
      },
      image: rock2

    },
    {
      style: {
        position: 'absolute',
        top: 150,
        left: 300,
        width: '50px'
      },
      image: rock3
    }
  ]};

  componentDidMount() {
  }


  fun = (counter) => {
      this.setState({bla: 'ble'})
  }

  rockClick = () => {
    this.props.setStage(5);
  }

  rock4 = () => {
    this.props.setStage(1);
  }

  render() {

    return (
      <div className="Rock">
        {this.state.Rock.map(item => (
          <img onClick={this.rockClick} src={item.image} style={item.style} alt="Rock" />
        ))}
        <img onClick={this.rock4} src={rock4} style={{
              position: 'absolute',
              top: 300,
              left: 300,
              width: '200px'
            }} alt="rock" />
      </div>
    );
  }
}

export default Rock;
