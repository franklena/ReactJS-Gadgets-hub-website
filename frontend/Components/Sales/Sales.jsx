import React from 'react';
import './Sales.css';
import banner from '../Assets/hero/headphone.png';

const Sales = () => {
    return (
      <div className="banner-container">
        <div className="main">
          <div className="left-content">
            <h1 className='off'>30% OFF</h1>
            <h1 className='head'>HAPPY<br/>&nbsp;&nbsp;HOURS</h1>
            <p>10 Jan to 28 Jan</p>
          </div>
          <div className="right-content">
            <img src={banner} alt="Air Solo Bass" className="image" />
            <div className="sale-info">
              <h1 className='solo-bass'>Apple Watches</h1>
              <h1 className='head'>Winter Sale</h1>
              <p className='caption'>Warm Up Your Winter with Our Hot Deals!<br/>
              Shop Now and Save Big!</p>
              <button className="shop-button">Shop</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sales;
  