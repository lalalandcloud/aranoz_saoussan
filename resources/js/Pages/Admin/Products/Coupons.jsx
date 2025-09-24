import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Coupons({ coupons }) {
    const [formData, setFormData] = useState({
        code: '',
        percent: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/admin/coupons', formData);
        setFormData({ code: '', percent: '' });
    };


    const deleteCoupon = (couponId) => {
        if (confirm('Supprimer ce coupon ?')) {
            router.delete(`/admin/coupons/${couponId}`);
        }
    };

    return (
        <>
            <Head title="Gestion Coupons" />
            <div>
                <h1>GESTION COUPONS</h1>
                <hr />
                
                <h2>CRÉER UN COUPON</h2>
                <form onSubmit={handleSubmit}>
                    <p>
                        Code: 
                        <input 
                            type="text" 
                            value={formData.code}
                            onChange={(e) => setFormData({...formData, code: e.target.value})}
                            placeholder="Ex: NOEL2024"
                            required 
                        />
                    </p>
                    
                    <p>
                        Pourcentage: 
                        <input 
                            type="number" 
                            min="1" 
                            max="100"
                            value={formData.percent}
                            onChange={(e) => setFormData({...formData, percent: e.target.value})}
                            placeholder="Ex: 20"
                            required 
                        />%
                    </p>
                    
                    <button type="submit">CRÉER COUPON</button>
                </form>
                
                <hr />
                
                <h2>COUPONS EXISTANTS ({coupons?.length || 0})</h2>
                {coupons?.length > 0 ? (
                    <table border="1" width="100%">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Réduction</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coupons.map(coupon => (
                                <tr key={coupon.id}>
                                    <td><strong>{coupon.code}</strong></td>
                                    <td>-{coupon.percent}%</td>
                                    <td>
                                        <button onClick={() => deleteCoupon(coupon.id)}>
                                            Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Aucun coupon créé</p>
                )}
            </div>
        </>
    );
}

Coupons.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>;