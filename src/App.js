import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductCategories from './components/ProductCategories';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { products } from './data';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState('Ice Coffee');

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = products.filter(product => 
            product.name.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredProducts(filtered);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        const filtered = products.filter(product => 
            product.category === category
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="app">
            <SearchBar onSearch={handleSearch} />
            <ProductCategories onSelectCategory={handleCategorySelect} selectedCategory={selectedCategory} />
            <div className="content">
                <ProductList addToCart={addToCart} products={filteredProducts} />
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            </div>
        </div>
    );
};

export default App;
