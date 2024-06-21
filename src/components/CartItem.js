import React from 'react';

const CartItem = ({ item }) => {
    return (
        <div className="cart-item">
            <p>{item.name}</p>
            {item.details && item.details.map((detail, index) => (
                <p key={index} className="cart-item-detail">+ {detail}</p>
            ))}
            <p className="cart-item-price">${item.price.toFixed(2)}</p>
        </div>
    );
};

export default CartItem;
