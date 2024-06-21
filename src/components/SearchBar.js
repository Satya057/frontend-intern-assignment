import React, { useState } from 'react';
import '../App.css';  // Adjust if your CSS file is at a different path

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search all products here..." 
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

export default SearchBar;
