import React, { useState } from 'react';
import './Product.css';
import p1 from '../Assets/product/p-1.jpg';
import p2 from '../Assets/product/p-2.jpg';
import p3 from '../Assets/product/p-3.jpg';
import p4 from '../Assets/product/p-4.jpg';
import p5 from '../Assets/product/p-5';
import p6 from '../Assets/product/p-6.jpg';
import p7 from '../Assets/product/p-7.jpg';
import p8 from '../Assets/product/p-9.jpg';

const products = [
  { id: 1, name: 'Boat Headphone', price: 220, image: p1 },
  { id: 2, name: 'Smart Watch', price: 350, image: p2 },
  { id: 3, name: 'VR Console', price: 520, image: p3 },
  { id: 4, name: 'Macbook', price: 600, image: p4 },
  { id: 5, name: 'Oneplus Earbuds', price: 250, image: p5 },
  { id: 6, name: 'Wired Headphone', price: 130, image: p6 },
  { id: 7, name: 'Apple Watch', price: 560, image: p7 },
  { id: 8, name: 'Goggles', price: 340, image: p8 },
];

const Product = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleIncreaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="product-container">
      <h2 className='picks'>Most Popular Picks</h2>
      <p className='cap'>Find your perfect match from our best-selling items collection!</p>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className='price'>${product.price}</p>
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            <div className="quantity-controls">
              <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
              <span>{cartItems.find(item => item.id === product.id)?.quantity || 0}</span>
              <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Shopping Cart</h3>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h4>Total: ${calculateTotal()}</h4>
        </div>
      )}
    </div>
  );
};

export default Product;
