import React from 'react';
import '../App.css';

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

export default ProductCategories;
