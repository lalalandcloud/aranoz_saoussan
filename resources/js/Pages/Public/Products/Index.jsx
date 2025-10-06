import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import PinnedCarrousel from '@/Components/PinnedCarrousel';
          
export default function Index({ products, auth }) {
    return (
        <>
            <Head title="Tous les produits" />
            <PinnedCarrousel products={products} />
            <div className="container py-5">
                <h1 className="mb-4">Tous les produits</h1>

                {products.length === 0 ? (
                    <p>Aucun produit disponible</p>
                ) : (
                    <div className="row g-4">
                        {products.map((product) => (
                            <div key={product.id} className="col-6 col-md-4 col-lg-3">
                                <div className="card h-100 shadow-sm">
                                    <Link href={`/products/${product.id}`}>
                                        <img
                                            src={`/storage/${product.img_main.replace('large_', 'medium_')}`}
                                            alt={product.name}
                                            className="card-img-top"
                                        />
                                    </Link>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title" title={product.name}>
                                            {product.name}
                                        </h5>
                                        {product.category && (
                                            <small className="text-muted mb-2">
                                                {product.category.name}
                                            </small>
                                        )}
                                        <p className="card-text">
                                            {product.description?.slice(0, 60)}...
                                        </p>
                                        <div className="mt-auto">
                                            {product.price_promo ? (
                                                <p className="mb-0">
                                                    <span className="text-decoration-line-through text-muted">
                                                        {product.price}€
                                                    </span>{' '}
                                                    <span className="fw-bold text-danger">
                                                        {product.price_promo}€
                                                    </span>
                                                </p>
                                            ) : (
                                                <p className="mb-0 fw-bold">{product.price}€</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

Index.layout = (page) => (
    page.props.auth && page.props.auth.user
        ? <AuthenticatedLayout>{page}</AuthenticatedLayout>
        : <GuestLayout>{page}</GuestLayout>
);
