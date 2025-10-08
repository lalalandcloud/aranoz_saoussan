import React from 'react';
import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminLayout from '@/Layouts/AdminLayout';

export default function PromosIndex({ promos, productsWithPromo }) {
    
    const applyRandomPromos = () => {
        if (confirm('Appliquer des promos aléatoires sur 30% des produits ?')) {
            router.post('/admin/promos/apply-random');
        }
    };
    
    const removeAllPromos = () => {
        if (confirm('Supprimer toutes les promos ?')) {
            router.post('/admin/promos/remove-all');
        }
    };

    return (
        <>
            <Head title="Gestion Promos" />
            
            <div className="admin-page-container">
                <div className="admin-page-header">
                    <h1 className="admin-page-title">Gestion des Promotions</h1>
                </div>

                <div className="admin-action-bar">
                    <button onClick={applyRandomPromos} className="admin-btn">
                        Appliquer promos aléatoires (30%)
                    </button>
                    <button onClick={removeAllPromos} className="admin-btn admin-btn-danger">
                        Supprimer toutes les promos
                    </button>
                </div>

                <div className="row g-4 mb-4">
                    <div className="col-md-4">
                        <div className="admin-stats-card">
                            <div className="admin-stats-value">{promos?.length || 0}</div>
                            <div className="admin-stats-label">Promos disponibles</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="admin-stats-card">
                            <div className="admin-stats-value">{productsWithPromo?.length || 0}</div>
                            <div className="admin-stats-label">Produits en promo</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="admin-stats-card">
                            <div className="admin-stats-value">
                                {promos?.reduce((sum, p) => sum + (p.products_count || 0), 0) || 0}
                            </div>
                            <div className="admin-stats-label">Total applications</div>
                        </div>
                    </div>
                </div>

                <div className="admin-form-card mb-4">
                    <h2 className="admin-section-title">Promos disponibles</h2>
                    
                    <div className="admin-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Pourcentage</th>
                                    <th>Produits affectés</th>
                                </tr>
                            </thead>
                            <tbody>
                                {promos?.length > 0 ? (
                                    promos.map(promo => (
                                        <tr key={promo.id}>
                                            <td>{promo.name}</td>
                                            <td>
                                                <span className="admin-badge">
                                                    -{promo.percent}%
                                                </span>
                                            </td>
                                            <td>{promo.products_count || 0}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="admin-empty-state">
                                            Aucune promo disponible
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="admin-form-card">
                    <h2 className="admin-section-title">Produits en promotion</h2>
                    
                    <div className="admin-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Produit</th>
                                    <th>Prix normal</th>
                                    <th>Promo</th>
                                    <th>Prix final</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productsWithPromo?.length > 0 ? (
                                    productsWithPromo.map(product => {
                                        const discount = (product.price * product.promo.percent) / 100;
                                        const finalPrice = product.price - discount;
                                        return (
                                            <tr key={product.id}>
                                                <td>{product.name}</td>
                                                <td>
                                                    <span className="admin-price-original">
                                                        {product.price}€
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="admin-badge">
                                                        -{product.promo.percent}%
                                                    </span>
                                                    <span style={{ 
                                                        fontSize: '12px',
                                                        color: '#6b7280',
                                                        marginLeft: '8px'
                                                    }}>
                                                        {product.promo.name}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="admin-price">
                                                        {finalPrice.toFixed(2)}€
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="admin-empty-state">
                                            Aucun produit en promo
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

PromosIndex.layout = (page) => (
    <AuthenticatedLayout>
        <AdminLayout>
            {page}
        </AdminLayout>
    </AuthenticatedLayout>
);