import React from 'react';
import '../App.css';

const ProductCard = ({ product, addToCart }) => {
    return (
        
        <div className="product-card">
          
            <img src={product.img} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
