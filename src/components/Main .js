import React, { useState } from 'react';
import './App.css';  
const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search all product here..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <div className="icons">
                <span className="icon">🔍</span>
            </div>
        </div>
    );
};

const categories = [
    { name: 'Ice Coffee', icon: '🧊' },
    { name: 'Hot Coffee', icon: '☕' },
    { name: 'Artisan Tea', icon: '🍵' },
    { name: 'Ice Mojito', icon: '🥤' },
    { name: 'Beverage', icon: '🍹' }
];

const ProductCategories = ({ onSelectCategory, selectedCategory }) => {
    return (
        <div className="product-categories">
            {categories.map((category, index) => (
                <div 
                    key={index} 
                    className={`category-item ${selectedCategory === category.name ? 'active' : ''}`}
                    onClick={() => onSelectCategory(category.name)}
                >
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-name">{category.name}</span>
                </div>
            ))}
        </div>
    );
};

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

const ProductList = ({ addToCart, products }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

const MainComponent = () => {
    const [products] = useState([
        { id: 1, name: 'ORI GIMBER 700ml', price: 24.95, img: 'image1.jpg' },
        { id: 2, name: 'GIMBER N°2 700 ml', price: 25.85, img: 'image2.jpg' },
        { id: 3, name: 'SML GIMBER 500ml', price: 20.45, img: 'image3.jpg' },
        { id: 4, name: 'GIMBER N°2 500 ml', price: 26.00, img: 'image4.jpg' },
        // Add more products as needed
    ]);
    
    const [selectedCategory, setSelectedCategory] = useState('Ice Coffee');
    const [cart, setCart] = useState([]);

    const handleSearch = (query) => {
        // Implement search functionality
        console.log('Searching for:', query);
    };

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="app">
            <SearchBar onSearch={handleSearch} />
            <ProductCategories onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
            <div className="content">
                <ProductList addToCart={handleAddToCart} products={products} />
                <div className="cart">
                    <div className="cart-header">
                        <div className="user-info">
                            <div className="user-avatar">JS</div>
                            <div className="user-name">Jimmy Sullivan</div>
                            <button className="edit-button">Edit</button>
                        </div>
                    </div>
                    <div className="cart-items">
                        {cart.map((item, index) => (
                            <div key={index} className="cart-item">
                                <p>{item.name}</p>
                                <p className="cart-item-detail">Details here...</p>
                                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <p>Subtotal <span>${
                            cart.reduce((total, item) => total + item.price, 0).toFixed(2)
                        }</span></p>
                        <p>Discount (10%) <span>-</span></p>
                        <p>Gratuity <span>$4.00</span></p>
                        <p>Total <span>${
                            (cart.reduce((total, item) => total + item.price, 0) + 4).toFixed(2)
                        }</span></p>
                    </div>
                    <div className="voucher-code">
                        <input type="text" placeholder="Add Voucher Code" />
                    </div>
                    <button className="print-receipt">Print Receipt</button>
                </div>
            </div>
        </div>
    );
};

export default MainComponent;
