import React from "react";
import './Products.css';
import data from '../../util';
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ setCurrentProduct, cart, setCart }) => {

    const onProductSelection = (prod) => {
        setCurrentProduct(prod);
    }

    return (
        <div className="products">
            <div className="product-heading">
                <h2>Products</h2>
                <div className="underline"></div>
            </div>
            <div className="products-grid">
                {data.map(product => {
                    return (
                        <ProductCard cart={cart} setCart={setCart} key={product.id} product={product} onClick={() => onProductSelection(product)}/>
                    )
                })}
            </div>

        </div>
    )
}

export default Products;