import React from 'react';

export default function CategoryFilter({ categories = [], onSelect }) {
  return (
    <div className="mb-4 p-4 cat-div">
      <h5 className='py-1'>Categories</h5>
      <ul className="">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className="cat-list py-3"
            style={{ cursor: 'pointer' }}
            onClick={() => onSelect(cat.id)}
          >
            {cat.name} ({cat.blogs_count || 0})
          </li>
        ))}
      </ul>
    </div>
  );
}
