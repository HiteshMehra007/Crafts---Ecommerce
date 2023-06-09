import React, {useState} from 'react';
import './ProductDetails.css';
import {images} from '../../constants';

const ProductDetails = ({product}) => {
    const [quantity, setQuantity] = useState(0);

    const decQuantity = () => {
        if(quantity > 0) setQuantity(quantity-1);
    }

    const incQuantity = () => {
        if(quantity < product.stock) setQuantity(quantity+1);
    }


    return (
            <div className="product-details">
                
                <div className="prod-img">
                    <img  src={images[`product${product.id}`]} alt={product.name} />
                </div>
                <div className="prod-description">
                    <h1>{product.name}</h1>
                    <div className='price'><strong>₹{product.price}</strong></div>
                    <p><strong>Detail:</strong></p>
                    <p>{product.description}</p>
                    <p><strong>Quantity:</strong></p>
                    <div className="counter">
                        <button onClick={decQuantity}>-</button>
                        <span>{quantity}</span>
                        <button onClick={incQuantity}>+</button>
                    </div>
                    <div className="buttons">
                        <button className='addToCartBtn'>Add to Cart</button>
                        <button className='buyNowBtn'>Buy Now</button>
                    </div>
                </div>
            </div>
        )
}

export default ProductDetails;