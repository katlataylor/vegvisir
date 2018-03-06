import React, { Component } from 'react';
import catimage from '../images/cat.png';
import './CatTextBox.css';

class CatTextBox extends Component {

  state = {catcolor: 'white', bottom: '20px', right: '20px'}

  handleMouseOver = () => {
    this.setState({catcolor: 'red'})
  }

  handleMouseOut = () => {
    this.setState({catcolor: 'white'})
  }

  handleClick = () => {
    this.setState({bottom: '200px', right: '300px'})
  }


  render() {
    return (
      <div className="CatTextBox">
        <img
          style={{
              background: this.state.catcolor,
              right: this.state.right,
              bottom: this.state.bottom
          }}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          onClick={this.handleClick}
          className="cat-image"
          src={catimage}
          alt="cat image" />
        <p className="cat-text">
          here is a compasdfasdfonent for our cat
        </p>
        <ul>
          <li>asdf123</li>
          <li>23</li>
          <li>123</li>
          <li>123</li>
        </ul>
      </div>
    );
  }
}

export default CatTextBox;
