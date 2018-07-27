import React, { Component } from 'react';
import Slider from 'react-slick'

class SlickCarousel extends Component {

  handleImageChange = (oldIndex, newIndex) => {
    this.props.onImageSelect(newIndex);
  }

  render() {
    const { images } = this.props;
    return (
      <div className="slick-container">
        <Slider
          beforeChange={this.handleImageChange}
          speed={500}
          dots
          infinite
        >
          {
            images.map(image => (
              <div>
                <img className="slick-image" src={image} alt="gallery-image" />
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}

export default SlickCarousel;
