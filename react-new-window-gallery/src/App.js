import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import SlickCarousel from './SlickCarousel'

class App extends Component {
  state = {
    images: [],
    currentImageIndex: 0
  }

  componentDidMount() {
    axios.get('/gallery/images').then(res => res.data).then(data => {
      this.setState({
        images: data
      })
    })
  }

  handleImageSelect = (imageIndex) => {
    this.setState({
      currentImageIndex: imageIndex
    });
  }


  render() {
    const { images, currentImageIndex } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Cool Gallery</h1>
        </header>
        <SlickCarousel onImageSelect={this.handleImageSelect} images={images}/>
        <div className="big-image-container">
          <img src={images[currentImageIndex]} alt="big-image-preview" className="big-image" />
        </div>
      </div>
    );
  }
}

export default App;
