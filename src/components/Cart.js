import React from 'react';
import '../App.css';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart }) => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const discount = subtotal * 0.1;
    const gratuity = 4.00;
    const total = subtotal - discount + gratuity;

    return (
        <div className="cart">
            <div className="cart-items">
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                ))}
            </div>
            <div className="cart-summary">
                <p className="subtotal">Subtotal: <span>${subtotal.toFixed(2)}</span></p>
                <p className="discount">Discount (10%): <span>-${discount.toFixed(2)}</span></p>
                <p className="gratuity">Gratuity: <span>${gratuity.toFixed(2)}</span></p>
                <p className="total">Total: <span>${total.toFixed(2)}</span></p>
            </div>
            <div className="voucher-code">
                <input type="text" placeholder="Add Voucher Code" />
            </div>
            <button className="print-receipt">Print Receipt</button>
        </div>
    );
};

export default Cart;
