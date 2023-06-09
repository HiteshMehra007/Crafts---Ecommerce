import React from "react";
import './Navbar.css';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = ({ cart }) => {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>Crafts</h1>
            </div>
            <div className="nav-icons">
                <div className="login icon-style">
                    <div className="login-icon">
                        <FaUser />
                    </div>
                    <div className="text">Login</div>
                </div>
                <div className="shopping-cart icon-style">
                    <FaShoppingCart />
                    <div className="cart-item-number">{cart.length}</div>
                    <div className="text">Cart</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;