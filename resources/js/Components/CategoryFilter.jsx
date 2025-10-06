import React from 'react';

export default function CategoryFilter({ categories = [], onSelect }) {
  return (
    <div className="mb-4">
      <h5>Catégories</h5>
      <ul className="list-group">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className="list-group-item list-group-item-action"
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
