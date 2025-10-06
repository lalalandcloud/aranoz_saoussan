import React from 'react';

export default function TagFilter({ tags = [], onSelect }) {
    return (
        <div>
            <h5>Tags</h5>
            <div className="d-flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag.id}
                        className="badge bg-light text-dark"
                        style={{ cursor: 'pointer' }}
                        onClick={() => onSelect(tag.id)}
                        dangerouslySetInnerHTML={{
                            __html: tag.icon ? `${tag.icon} ${tag.name}` : tag.name,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
