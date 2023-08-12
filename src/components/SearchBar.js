import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-bar">
      <span className="back-symbol">←</span>
      <span className="search-text">Romantic Comedy</span>
      <input type="text" placeholder="Search romantic comedy" onChange={handleSearch} />
  
    </div>
  );
};

export default SearchBar;
