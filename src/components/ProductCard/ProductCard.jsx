import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import {images} from '../../constants';

const ProductCard = ({product, cart, setCart}) => {
    const path = `/product/${product.id}`;

    const addToCartHandler = () => {
        let newArray = [...cart];
        newArray.push(product);
        setCart(newArray);
    }

    return (
        <Link to={path}>
        <div className="card">
            <img className="card-img" src={images[`product${product.id}`]} alt={product.name} />
            <p>{product.name}</p>
            <p>₹{product.price}</p>
            <button className='addToCartBtn' onClick={addToCartHandler}>Add to Cart</button>
        </div>
        </Link>
    )
}

export default ProductCard;
