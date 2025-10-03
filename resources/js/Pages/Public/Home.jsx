import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import PinButton from '@/Components/PinButton';
import AddToCart from '@/Components/AddToCart';

import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Home({ products, categories, auth }) {
    const displayedProducts = products?.slice(0, 16) || [];
    
    // Diviser les produits en groupes de 8
    const chunkArray = (array, size) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    };
    
    const productSlides = chunkArray(displayedProducts, 8);

    return (
        <>
            <Head title="Catalogue" />
            
            <div className="container py-5">

                <h2 className="mb-4">Featured Categories</h2>
                <div className="row g-3 mb-5">
                    {categories?.map((category) => (
                        <div key={category.id} className="col-6 col-md-4 col-lg-3">
                            <div className="category-card">
                                {category.img && (
                                    <img 
                                        src={`/storage/${category.img}`}
                                        alt={category.name}
                                        className="category-image"
                                    />
                                )}
                                <div className="category-name">
                                    {category.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>                
                {/* Carousel */}
                <h2 className="mt-5 mb-4">Nos Produits</h2>
                
                {displayedProducts.length === 0 ? (
                    <p>Aucun produit disponible</p>
                ) : (
                    <div id="productsCarousel" className="carousel slide carousel-container" data-bs-ride="carousel">
                        {/* Indicators */}
                        <div className="carousel-indicators">
                            {productSlides.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#productsCarousel"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? 'active' : ''}
                                    aria-current={index === 0 ? 'true' : 'false'}
                                    aria-label={`Slide ${index + 1}`}
                                ></button>
                            ))}
                        </div>

                        {/* Slides */}
                        <div className="carousel-inner">
                            {productSlides.map((slide, slideIndex) => (
                                <div 
                                    key={slideIndex} 
                                    className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}
                                >
                                    <div className="row g-3">
                                        {slide.map((product) => (
                                            <div key={product.id} className="col-6 col-md-3 col-lg-3 col-xl-1-5">
                                                <div className="product-card">
                                                    <Link href={`/products/${product.id}`}>
                                                        <img 
                                                            src={`/storage/${product.img_main.replace('large_', 'medium_')}`}
                                                            alt={product.name}
                                                            className="product-image"
                                                        />
                                                    </Link>
                                                    
                                                    <div className="product-info">
                                                        <h3 className="product-name" title={product.name}>
                                                            {product.name}
                                                        </h3>
                                                        
                                                        <p className="product-price">
                                                            {product.price}€
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Controls */}
                        <button 
                            className="carousel-control-prev" 
                            type="button" 
                            data-bs-target="#productsCarousel" 
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button 
                            className="carousel-control-next" 
                            type="button" 
                            data-bs-target="#productsCarousel" 
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

Home.layout = (page) => (
    page.props.auth && page.props.auth.user 
        ? <AuthenticatedLayout>{page}</AuthenticatedLayout>
        : <GuestLayout>{page}</GuestLayout>
);