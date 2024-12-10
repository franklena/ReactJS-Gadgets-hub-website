import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../CartContext'; // Import CartContext

const Cart = () => {
    const { cartItems } = useContext(CartContext); // Get cartItems from context

    const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0); // Calculate total

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <div>
                            <h3>{item.name}</h3>
                            <p>${item.price} x {item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-total">
                <h3>Total: ${totalAmount.toFixed(2)}</h3>
            </div>
            <div className="checkout-form">
                <h3>Checkout</h3>
                <input type="text" placeholder="Customer Name" />
                <input type="text" placeholder="Phone Number" />
                <button>Place Order</button>
            </div>
        </div>
    );
};

export default Cart;
