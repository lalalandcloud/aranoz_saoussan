import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function CouponForm({ cartTotal, onCouponApplied }) {
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [message, setMessage] = useState('');

    const applyCoupon = () => {
    router.post('/coupons/check', {
        code: code,
        total: cartTotal
    });
};

    return (
        <div>
            <h3>CODE PROMO</h3>
            
            {appliedCoupon ? (
                <div>
                    <p>Coupon appliqué: <strong>{appliedCoupon.code}</strong> (-{appliedCoupon.percent}%)</p>
                    <button onClick={removeCoupon}>Retirer</button>
                </div>
            ) : (
                <div>
                    <input 
                        type="text" 
                        name="coupon_code"  
                        id="coupon_code"  
                        value={code}
                        onChange={(e) => setCode(e.target.value.toUpperCase())}
                        placeholder="Code promo"
                        disabled={loading}
                    />
                    <button onClick={applyCoupon} disabled={loading || !code.trim()}>
                        {loading ? 'Validation...' : 'Appliquer'}
                    </button>
                </div>
            )}
            
            {message && <p>{message}</p>}
        </div>
    );
}