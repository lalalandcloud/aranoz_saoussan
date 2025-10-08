import React from 'react';
import { Link } from '@inertiajs/react';

export default function PinnedCarrousel({ products }) {
    // Gérer le cas où products est undefined ou vide
    if (!products || products.length === 0) {
        return null;
    }

    const pinnedProducts = products.filter(product => product.pin === 1);

    if (pinnedProducts.length === 0) {
        return null;
    }

    return (
        <div className="pinned-carousel-section">
            <div className="container">                
                <div 
                    id="pinnedCarousel" 
                    className="carousel slide" 
                    data-bs-ride="carousel"
                    data-bs-interval="4000"
                >
                    <div className="carousel-indicators">
                        {pinnedProducts.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#pinnedCarousel"
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                aria-current={index === 0 ? 'true' : 'false'}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>

                    <div className="carousel-inner">
                        {pinnedProducts.map((product, index) => (
                            <div 
                                key={product.id} 
                                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                            >
                                <div className="pinned-product-slide">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 pinned-product-images">
                                            <img 
                                                src={`/storage/${product.img_main}`}
                                                alt={product.name}
                                                className="pinned-product-image"
                                            />
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <div className="pinned-product-content">                                                
                                                <h3 className="pinned-product-name">
                                                    {product.name}
                                                </h3>
                                                
                                                <p className="pinned-product-description">
                                                    {product.description.substring(0, 200)}
                                                    {product.description.length > 200 ? '...' : ''}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button 
                        className="carousel-control-prev" 
                        type="button" 
                        data-bs-target="#pinnedCarousel" 
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button 
                        className="carousel-control-next" 
                        type="button" 
                        data-bs-target="#pinnedCarousel" 
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}