import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
