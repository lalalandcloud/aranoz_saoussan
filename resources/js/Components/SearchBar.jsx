import React, { useState } from 'react';

export default function SearchBar({ initialValue = '', onSearch }) {
  const [value, setValue] = useState(initialValue);

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Rechercher..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="btn btn-primary w-100"
        onClick={() => onSearch(value)}
      >
        Rechercher
      </button>
    </div>
  );
}
