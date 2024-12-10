import React from 'react';
import './Footer.css';
import brand1 from '../Assets/brand/br-1.png'; 
import brand2 from '../Assets/brand/br-2.png';
import brand3 from '../Assets/brand/br-3.png';
import brand4 from '../Assets/brand/br-4.png';
import brand5 from '../Assets/brand/br-5.png';


const Footer = () => {
  return (
    
    <footer className="footer-container">
      {/* Brand Logos Section */}
      <div className="footer-brands">
        <img src={brand1} alt="Golden Logo" />
        <img src={brand2} alt="Jack Roller" />
        <img src={brand3} alt="Sweety Furniture" />
        <img src={brand4} alt="Mighty Furnitures" />
        <img src={brand5} alt="Fastlane" />
      </div>

      {/* Footer Content Section */}
      <div className="footer-content">
        <div className="footer-section company-info">
          <h2 className="footer-logo">Gadgets-hub</h2>
          <p className='description'>
          Gadget Hub is your one-stop destination for discovering the coolest electronic gadgets, complete with in-depth reviews and demos. Stay informed on the latest tech trends and make smarter buying decisions.
          </p>
        </div>

        <div className="footer-section updated">
          <h3 className='stay'>Stay Updated!</h3>
          <p className='cap'>Get the latest gadgets, deals, and news directly to your inbox.</p>
        </div>

        <div className="footer-section contact-section">
          <div className="footer-contact-info">
            <p className='add'><i className="fas fa-map-marker-alt"></i> Teynampet, Chennai.</p>
            <p className='add'><i className="fas fa-phone-alt"></i> +91 123456789</p>
            <div className="social-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
