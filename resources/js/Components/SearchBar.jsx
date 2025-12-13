import React, { useState } from 'react';

export default function SearchBar({ initialValue = '', onSearch }) {
  const [value, setValue] = useState(initialValue);

  return (
    <div className="mb-4 p-4 search-div">
      <input
        type="text"
        className="form-control search-form mb-2"
        placeholder="Search Keyword"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="search-btn py-2 w-100"
        onClick={() => onSearch(value)}
      >
        SEARCH
      </button>
    </div>
  );
}
