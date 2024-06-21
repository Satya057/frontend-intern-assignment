import React from 'react';
import '../App.css';

const CartItem = ({ item, removeFromCart }) => {
    return (
        <div className="cart-item">
            <p>{item.name}</p>
            {item.details && item.details.map((detail, index) => (
                <p key={index} className="cart-item-detail">+ {detail}</p>
            ))}
            <p className="cart-item-price">${item.price.toFixed(2)}</p>
            <button className="remove-item-button" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
    );
};

export default CartItem;
