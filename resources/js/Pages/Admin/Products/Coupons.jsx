import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminLayout from '@/Layouts/AdminLayout';

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
            
            <div className="admin-page-container">
                <div className="admin-page-header">
                    <h1 className="admin-page-title">Gestion des Coupons</h1>
                </div>

                <div className="row">
                    <div className="col-lg-5">
                        <div className="admin-form-card">
                            <h2 className="admin-section-title">Créer un coupon</h2>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="admin-form-group">
                                    <label className="admin-form-label">Code du coupon</label>
                                    <input 
                                        type="text"
                                        className="admin-input"
                                        value={formData.code}
                                        onChange={(e) => setFormData({...formData, code: e.target.value})}
                                        placeholder="NOEL2024"
                                        required 
                                    />
                                </div>
                                
                                <div className="admin-form-group">
                                    <label className="admin-form-label">Pourcentage de réduction</label>
                                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                        <input 
                                            type="number"
                                            className="admin-input"
                                            min="1"
                                            max="100"
                                            value={formData.percent}
                                            onChange={(e) => setFormData({...formData, percent: e.target.value})}
                                            placeholder="20"
                                            required 
                                        />
                                        <span style={{ color: '#6b7280', fontSize: '14px' }}>%</span>
                                    </div>
                                </div>
                                
                                <button type="submit" className="admin-btn admin-btn-primary">
                                    Créer le coupon
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="admin-stats-card mb-3">
                            <div className="admin-stats-value">{coupons?.length || 0}</div>
                            <div className="admin-stats-label">Coupons actifs</div>
                        </div>

                        <div className="admin-table-container">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Réduction</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coupons?.length > 0 ? (
                                        coupons.map(coupon => (
                                            <tr key={coupon.id}>
                                                <td>
                                                    <span style={{ 
                                                        fontFamily: 'monospace',
                                                        fontWeight: '600',
                                                        fontSize: '14px'
                                                    }}>
                                                        {coupon.code}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="admin-badge">
                                                        -{coupon.percent}%
                                                    </span>
                                                </td>
                                                <td>
                                                    <button 
                                                        onClick={() => deleteCoupon(coupon.id)}
                                                        className="admin-btn admin-btn-danger"
                                                    >
                                                        Supprimer
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3" className="admin-empty-state">
                                                Aucun coupon créé
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Coupons.layout = (page) => (
    <AuthenticatedLayout>
        <AdminLayout>
            {page}
        </AdminLayout>
    </AuthenticatedLayout>
);