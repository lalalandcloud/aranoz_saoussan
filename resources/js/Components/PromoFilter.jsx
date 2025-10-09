import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function PromoFilter() {
    const [showPromoOnly, setShowPromoOnly] = useState(false);

    const handleToggle = () => {
        const newValue = !showPromoOnly;
        setShowPromoOnly(newValue);
        
        if (newValue) {
            router.get('/products/filter', { has_promo: 'true' });
        } else {
            router.get('/products');
        }
    };

    return (
        <div className="promo-filter-container mt-4">
            <label className="promo-toggle-label">
                <input
                    type="checkbox"
                    checked={showPromoOnly}
                    onChange={handleToggle}
                    className="promo-checkbox-hidden"
                />
                <span className="promo-toggle-switch">
                    <span className="promo-toggle-slider"></span>
                </span>
                <span className="promo-toggle-text">Promos uniquement</span>
            </label>
        </div>
    );
}