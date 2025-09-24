import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function PinButton({ product }) {
    const [isPinned, setIsPinned] = useState(product.is_pinned_by_user || false);
    const [pinsCount, setPinsCount] = useState(product.pins_count || 0);
    const [isLoading, setIsLoading] = useState(false);

    const handleTogglePin = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (isLoading) return;
        
        setIsLoading(true);

        router.post(`/products/${product.id}/toggle-pin`, {}, {
            onSuccess: (response) => {
                // Mettre à jour l'état local
                const newIsPinned = !isPinned;
                setIsPinned(newIsPinned);
                setPinsCount(prevCount => newIsPinned ? prevCount + 1 : prevCount - 1);
            },
            onError: (errors) => {
                console.error('Erreur:', errors);
                // Si non connecté, rediriger vers login
                if (errors.message && errors.message.includes('connecté')) {
                    router.visit('/login');
                }
            },
            onFinish: () => {
                setIsLoading(false);
            }
        });
    };

    return (
        <button
            onClick={handleTogglePin}
            disabled={isLoading}
        >
            <span>
                {isPinned ? '❤️' : '🤍'}
            </span>
            <span>
                {pinsCount}
            </span>
        </button>
    );
}