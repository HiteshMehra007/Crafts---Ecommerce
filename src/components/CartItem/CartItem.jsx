import React from 'react';
import './CartItem.css';

const CartItem = ({ cart }) => {
  return (
    <div className='cart-items'>
      {
        cart.length ?
        cart.map( item => {
         return <p>{item.name}</p> 
        })
        :
        <p>No items in your cart</p>
      }
    </div>
  )
}

export default CartItem;