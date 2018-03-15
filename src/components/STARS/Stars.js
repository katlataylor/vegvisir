import React, { Component } from 'react';
import './Stars.css';
import star from '../../images/star.png';



class STARS extends Component {

  state = {stars: [
    {
      position: 'absolute',
      top: 20,
      left: 200,
      width: '50px'
    },
    {
      position: 'absolute',
      top: 150,
      left: 500,
      width: '50px'
    },
    {
      position: 'absolute',
      top: 150,
      left: 300,
      width: '50px'
    }
  ]};

  componentDidMount() {
  }


  fun = (counter) => {
      this.setState({bla: 'ble'})
  }

  starClick = () => {
    this.props.setStage(1);
  }

  starCorrect = () => {
    this.props.setStage(4);
  }

  render() {
    const { anim } = this.state;
    return (
      <div className="STARS">
        {this.state.stars.map(item => (
          <img onClick={this.starClick} src={star} style={item} alt="star" />
        ))}
        <img onClick={this.starCorrect} src={star} style={{
              position: 'absolute',
              top: 10000,
              left: 300,
              width: '200px'
            }} alt="star" />
      </div>
    );
  }
}

export default STARS;
