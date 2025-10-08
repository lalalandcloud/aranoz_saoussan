import React from 'react';
import { router } from '@inertiajs/react';

export default function TogglePin({ product, showLabel = true }) {
    const handleToggle = () => {
        router.post(route('admin.products.toggle-pin', product.id), {}, {
            preserveScroll: true,
        });
    };

    return (
        <button
            onClick={handleToggle}
            className={`toggle-pin-btn ${product.pin ? 'pinned' : ''} rounded-pill admin-btn-product`}
            title={product.pin ? 'Retirer du carrousel' : 'Ajouter au carrousel'}
        >
            {showLabel && (
                <span>{product.pin ? 'Pinned' : 'Pin'}</span>
            )}
        </button>
    );
}