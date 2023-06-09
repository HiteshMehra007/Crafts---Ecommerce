import React from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
        <h3>Your Cart</h3>
        <hr />
        <div className="cart-items">
            <CartItem cart={cart} />
        </div>
        <hr />
        <div className="cart-bottom">
            <h4>Total :</h4>
            <div className="cart-total-amount"><h4>₹0.00</h4></div>
        </div>
    </div>
  )
}

export default Cart;