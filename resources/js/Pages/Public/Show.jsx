import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import PinButton from '@/Components/PinButton';
import AddToCart from '@/Components/AddToCart';
import TogglePin from '@/Components/TogglePin';

export default function Show({ product, auth }) {
    const [selectedImage, setSelectedImage] = useState(product.img_main);
    const [activeTab, setActiveTab] = useState('description');
    
    const isAdmin = auth?.user?.role?.name === 'admin';
    
    // Calculer le prix avec réduction - CORRECTION ICI
    const hasPromo = product.promo && product.promo !== null;
    const originalPrice = parseFloat(product.price);
    const discountPercent = hasPromo ? product.promo.percent : 0;
    const currentPrice = hasPromo 
        ? originalPrice - (originalPrice * discountPercent / 100)
        : originalPrice;
    
    // Images secondaires
    const secondaryImages = [
        product.img_2,
        product.img_3,
        product.img_4
    ].filter(img => img !== null && img !== undefined);

    return (
        <>
            <Head title={product.name} />
            
            <div className="product-show-container">
                <Link href="/" className="btn btn-outline-secondary mb-3">
                    ← Retour à la liste
                </Link>
                
                {/* Fiche produit principale */}
                <div className="product-card">
                    <div className="product-main-content">
                        {/* LEFT - Images */}
                        <div className="product-images-section">
                            <div className="product-main-image-wrapper">
                                <img 
                                    src={`/storage/${selectedImage.replace('large_', 'medium_')}`}
                                    alt={product.name}
                                    className="product-main-image"
                                />
                            </div>
                            
                            {secondaryImages.length > 0 && (
                                <div className="product-thumbnails">
                                    <img 
                                        src={`/storage/${product.img_main.replace('large_', 'thumb_')}`}
                                        alt={product.name}
                                        className="product-thumbnail"
                                        onClick={() => setSelectedImage(product.img_main)}
                                    />
                                    {secondaryImages.map((img, index) => (
                                        <img 
                                            key={index}
                                            src={`/storage/${img}`}
                                            alt={`${product.name} ${index + 2}`}
                                            className="product-thumbnail"
                                            onClick={() => setSelectedImage(img)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        {/* RIGHT - Info */}
                        <div className="product-info-section">
                            <h1 className="product-name-title">{product.name}</h1>
                            
                            <div className="product-price-section">
                                {hasPromo && (
                                    <span className="product-original-price">
                                        {originalPrice.toFixed(2)}€
                                    </span>
                                )}
                                <span className="product-current-price">
                                    {currentPrice.toFixed(2)}€
                                </span>
                                {hasPromo && (
                                    <span className="product-discount-badge">
                                        -{discountPercent}%
                                    </span>
                                )}
                            </div>
                            
                            <span className="product-category-badge">
                                {product.category?.name}
                            </span>
                            
                            <div className={`product-stock-status ${product.stock > 0 ? 'in-stock' : 'out-stock'}`}>
                                {product.stock > 0 
                                    ? `✓ En stock (${product.stock} disponible${product.stock > 1 ? 's' : ''})`
                                    : '✗ Rupture de stock'
                                }
                            </div>
                            
                            <p className="product-short-description">
                                {product.description?.substring(0, 150)}...
                            </p>
                            
                            <div className="product-actions">
                                {auth?.user && <PinButton product={product} />}
                                <AddToCart product={product} />
                                {isAdmin && <TogglePin product={product} />}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Tabs Description / Spécifications */}
                <div className="product-tabs-section">
                    <div className="product-tabs-nav">
                        <button 
                            className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
                            onClick={() => setActiveTab('description')}
                        >
                            Description
                        </button>
                        <button 
                            className={`tab-button ${activeTab === 'specifications' ? 'active' : ''}`}
                            onClick={() => setActiveTab('specifications')}
                        >
                            Spécifications
                        </button>
                    </div>
                    
                    <div className="product-tabs-content">
                        <div className={`tab-panel ${activeTab === 'description' ? 'active' : ''}`}>
                            <p className="tab-content-text">{product.description}</p>
                        </div>
                        
                        <div className={`tab-panel ${activeTab === 'specifications' ? 'active' : ''}`}>
                            <div className="tab-content-text">
                                <p><strong>Couleur:</strong> {product.colour}</p>
                                <p><strong>Stock:</strong> {product.stock} unité{product.stock > 1 ? 's' : ''}</p>
                                <p><strong>Catégorie:</strong> {product.category?.name}</p>
                                <p><strong>Prix:</strong> {currentPrice.toFixed(2)}€</p>
                                {hasPromo && (
                                    <p><strong>Promotion:</strong> {product.promo.name} (-{discountPercent}%)</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Show.layout = (page) => (
    page.props.auth && page.props.auth.user 
        ? <AuthenticatedLayout>{page}</AuthenticatedLayout>
        : <GuestLayout>{page}</GuestLayout>
);