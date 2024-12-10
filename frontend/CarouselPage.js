import React from 'react';
import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel';
import image1 from './Components/Assets/hero/gadgets1'
import image2 from './Components/Assets/hero/gadgets2'
import image3 from './Components/Assets/hero/gadgets3'

function CarouselPage() {
    return (
        <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="img1"
          src={image2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='beats'>Beats Solo</h3>
          <h1 className='display'>Wireless Headphones</h1>
          <button className='shop'>Shop now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img2"
          src={image1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='beats'>Beats Solo</h3>
          <h1 className='display'>Branded Laptops</h1>
          <button className='shop'>Shop now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img3"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='beats'>Beats Solo</h3>
          <h1 className='display'>VR Gaming console</h1>
          <button className='shop'>Shop now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    )
}

export default CarouselPage;