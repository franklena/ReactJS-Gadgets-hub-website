import React from 'react';
import './Banner.css';
import car from '../Assets/shipping/car.png';
import earphone from '../Assets/shipping/earphone';
import tick from '../Assets/shipping/tick.png';
import wallet from '../Assets/shipping/wallet.png';
import headphone from '../Assets/hero/watch.png';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="top-icons">
        <div className="icon-item">
          <img src={car} alt="Fast Delivery" />
          <span className='topic'>Fast Delivery</span>
        </div>
        <div className="icon-item">
          <img src={tick} alt="Quality Assurance" />
          <span className='topic'>Quality Assurance</span>
        </div>
        <div className="icon-item">
          <img src={earphone} alt="Tech Assistance" />
          <span className='topic'>Tech Assistance</span>
        </div>
        <div className="icon-item">
          <img src={wallet} alt="Secure Payment" />
          <span className='topic'>Secure Payment</span>
        </div>
      </div>

      <div className="main-banner">
        <div className="left-content">
          <h1 className='off'>30% OFF</h1>
          <h1 className='head'>FINE<br/>&nbsp;&nbsp;SMILE</h1>
          <p>10 Jan to 28 Jan</p>
        </div>
        <div className="right-content">
          <img src={headphone} alt="Air Solo Bass" className="banner-image" />
          <div className="sale-info">
            <h1 className='solo-bass'>Air Solo Bass</h1>
            <h1 className='head'>Winter Sale</h1>
            <p className='caption'>Make This Winter Unforgettable with Our Special Discounts!<br/>
            Shop Now and Save Big!</p>
            <button className="shop-button">Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
