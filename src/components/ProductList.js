import React from 'react';
import '../App.css';
import ProductCard from './ProductCard';

const ProductList = ({ addToCart, products }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
