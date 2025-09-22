import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function PinButton({ product, className = "" }) {
    const [isPinned, setIsPinned] = useState(product.is_pinned_by_user || false);
    const [pinsCount, setPinsCount] = useState(product.pins_count || 0);
    const [isLoading, setIsLoading] = useState(false);

    const handleTogglePin = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (isLoading) return;
        
        setIsLoading(true);

        try {
            const response = await fetch(`/products/${product.id}/toggle-pin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
                }
            });

            const data = await response.json();

            if (data.success) {
                setIsPinned(data.is_pinned);
                setPinsCount(prevCount => data.is_pinned ? prevCount + 1 : prevCount - 1);
                
                // Optionnel: afficher un message de succès
                if (window.toast) {
                    window.toast.success(data.message);
                }
            } else {
                if (response.status === 401) {
                    // Rediriger vers la page de connexion
                    router.visit('/login');
                }
                console.error('Erreur:', data.message);
            }
        } catch (error) {
            console.error('Erreur réseau:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handleTogglePin}
            disabled={isLoading}
            className={`
                inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm 
                transition-all duration-200 hover:scale-105 active:scale-95
                ${isPinned 
                    ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }
                ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                ${className}
            `}
            title={isPinned ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
            <span className={`text-lg ${isLoading ? 'animate-pulse' : ''}`}>
                {isPinned ? '❤️' : '🤍'}
            </span>
            <span className="font-medium">
                {pinsCount}
            </span>
        </button>
    );
}