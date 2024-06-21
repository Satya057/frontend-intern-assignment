// // src/App.js
// import React, { useState } from 'react';
// import ProductList from './components/ProductList';
// import Cart from './components/Cart';
// import SearchBar from './components/SearchBar';
// import ProductCategories from './components/ProductCategories'; // Importing ProductCategories
// import { products } from './data'; // Importing products data
// import './App.css';

// function App() {
//     const [cartItems, setCartItems] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState('Ice Coffee'); // State for selected category

//     const addToCart = (product) => {
//         setCartItems([...cartItems, product]);
//     };

//     const handleSearch = (query) => {
//         const lowerCaseQuery = query.toLowerCase();
//         const filtered = products.filter(product => 
//             product.name.toLowerCase().includes(lowerCaseQuery)
//         );
//         setFilteredProducts(filtered);
//     };

//     const handleCategorySelect = (category) => {
//         setSelectedCategory(category);
//         const filtered = products.filter(product => 
//             product.category === category
//         );
//         setFilteredProducts(filtered);
//     };

//     return (
//         <div className="app">
//             <SearchBar onSearch={handleSearch} />
//             <ProductCategories onSelectCategory={handleCategorySelect} selectedCategory={selectedCategory} />
//             <div className="content">
//                 <ProductList addToCart={addToCart} products={filteredProducts.length ? filteredProducts : products} />
//                 <Cart cartItems={cartItems} />
//             </div>
//         </div>
//     );
// }

// export default App;


import React, { useState } from 'react';
import './App.css'; // Ensure you have the CSS in the same folder or adjust the import path accordingly
import { products } from './data'; // Importing products data

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

const Cart = ({ cartItems }) => {
    return (
        <div className="cart">
            <div className="cart-header">
                <div className="user-info">
                    <div className="user-avatar">JS</div>
                    <div className="user-name">Jimmy Sullivan</div>
                    <button className="edit-button">Edit</button>
                </div>
            </div>
            <div className="cart-items">
                {cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                        <p>{item.name}</p>
                        <p className="cart-item-detail">Details here...</p>
                        <p className="cart-item-price">${item.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <p>Subtotal <span>${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</span></p>
                <p>Discount (10%) <span>-</span></p>
                <p>Gratuity <span>$4.00</span></p>
                <p>Total <span>${(cartItems.reduce((total, item) => total + item.price, 0) + 4).toFixed(2)}</span></p>
            </div>
            <div className="voucher-code">
                <input type="text" placeholder="Add Voucher Code" />
            </div>
            <button className="print-receipt">Print Receipt</button>
        </div>
    );
};

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState('Ice Coffee');

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
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
                <Cart cartItems={cartItems} />
            </div>
        </div>
    );
};

export default App;
