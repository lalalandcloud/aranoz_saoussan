import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PinButton from '@/Components/PinButton';
import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Pins({ pinnedProducts }) {
    return (
        <AuthenticatedLayout>
            <Head title="Mes Favoris" />
            
            <div className="page-container">
                <div className="page-header">
                    <h1 className="page-title">Mes Favoris</h1>
                    {pinnedProducts?.length > 0 && (
                        <p className="page-subtitle">
                            {pinnedProducts.length} produit{pinnedProducts.length > 1 ? 's' : ''} dans vos favoris
                        </p>
                    )}
                </div>
                
                {pinnedProducts?.length === 0 ? (
                    <div className="empty-state">
                        <h2 className="empty-state-title">Aucun produit dans vos favoris</h2>
                        <p className="empty-state-text">
                            Découvrez notre catalogue et ajoutez vos produits préférés
                        </p>
                        <Link href={route('public.home')} className="btn-primary-minimal">
                            Parcourir le catalogue
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <Link 
                                href={route('public.home')}
                                className="btn-outline-minimal"
                            >
                                Retour au catalogue
                            </Link>
                        </div>

                        <div className="row g-4">
                            {pinnedProducts.map((product) => (
                                <div key={product.id} className="col-12 col-md-6 col-lg-4">
                                    <div className="product-card-minimal">
                                        <div className="product-image-container">
                                            <img 
                                                src={`/storage/${product.img_main}`} 
                                                alt={product.name}
                                                className="product-image-minimal"
                                            />
                                            <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                                                <PinButton product={{...product, is_pinned_by_user: true}} />
                                            </div>
                                        </div>
                                        
                                        <div className="product-content-minimal">
                                            <h3 className="product-title-minimal">{product.name}</h3>
                                            
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <span className="product-price-minimal">
                                                    {product.price}€
                                                </span>
                                                <span className="stock-badge">
                                                    Stock: {product.stock}
                                                </span>
                                            </div>
                                            
                                            {product.category && (
                                                <p className="product-category-minimal">
                                                    {product.category.name}
                                                </p>
                                            )}
                                            
                                            {product.description && (
                                                <p className="product-description-minimal">
                                                    {product.description}
                                                </p>
                                            )}
                                            
                                            <Link 
                                                href={`/products/${product.id}`}
                                                className="btn-primary-minimal w-100 mt-3"
                                            >
                                                Voir les détails
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </AuthenticatedLayout>
    );
}