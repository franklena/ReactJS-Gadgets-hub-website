import React from 'react';
import './Category.css';
import earphone from '../Assets/category/earphone.png'; 
import gadget from '../Assets/category/gaming.png';
import macbook from '../Assets/category/macbook.png';
import smartwatch from '../Assets/category/smartwatch.png';
import speaker from '../Assets/category/speaker.png';
import vrconsole from '../Assets/category/vr.png';

const Category = () => {
  const items = [
    { title: "Earphone", image: earphone, color: "brown", btnColor: "#ff3e3e" },
    { title: "Gadget", image: gadget, color: "#ffc107", btnColor: "#f1f1f1" },
    { title: "Macbook", image: macbook, color: "pink", btnColor: "#f1f1f1" },
    { title: "Smart Watches", image: smartwatch, color: "#e0e0e0", btnColor: "#ff3e3e" },
    { title: "Speaker", image: speaker, color: "#28a745", btnColor: "#f1f1f1" },
    { title: "Console", image: vrconsole, color: "#007bff", btnColor: "#f1f1f1" },
  ];

  return (
    <div className="shop-container">
      {items.map((item, index) => (
        <div className="shop-item" style={{ backgroundColor: item.color }} key={index}>
          <img src={item.image} alt={item.title} className="shop-item-image" />
          <h2>Enjoy With <span>{item.title}</span></h2>
          <button style={{ backgroundColor: item.btnColor }} className="browse">Browse</button>
        </div>
      ))}
    </div>
  );
};

export default Category;
