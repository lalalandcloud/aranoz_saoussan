import React from 'react';

export default function TagFilter({ tags = [], onSelect }) {
  return (
    <div className='tag-div p-4'>
      <h5>Tags Cloud</h5>
      <div className="d-flex py-3 flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.id}
            className="py-1 px-4 tag-list"
            style={{ cursor: 'pointer' }}
            onClick={() => onSelect(tag.id)}
            dangerouslySetInnerHTML={{
              __html: tag.icon ? `${tag.name}` : tag.name,
            }}
          />
        ))}
      </div>
    </div>
  );
}
