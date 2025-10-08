import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import PinnedCarrousel from '@/Components/PinnedCarrousel';
import TogglePin from '@/Components/TogglePin';
import SearchBar from '@/Components/SearchBarP';
import CategoryFilter from '@/Components/CatFilter';
import PromoFilter from '@/Components/PromoFilter';

export default function Index({ products, auth, categories }) {

    const isAdmin = auth?.user?.role?.name === 'admin';

    const { delete: destroy } = useForm();

    const handleDelete = () => {
        if (confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
            destroy(`/admin/products/${product.id}`);
        }
    };

    return (
        <>
            <Head title="Tous les produits" />
            <PinnedCarrousel products={products} />
            
            <div className="container py-5">
                <div className='mb-4'>
                    <SearchBar />
                    <PromoFilter />
                </div>

                <div className="row">
                    {/* Colonne de gauche - Filtres */}
                    <div className="col-lg-3 col-md-4">
                        <CategoryFilter categories={categories} />
                    </div>

                    {/* Colonne de droite - Produits */}
                    <div className="col-lg-9 col-md-8">
                        {products.length === 0 ? (
                            <p>Aucun produit disponible</p>
                        ) : (
                            <div className="row g-4">
                                {products.map((product) => (
                                    <div key={product.id} className="col-6 col-lg-4">
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
                                                <div className="div-card-product-bottom d-flex justify-content-between mt-auto">
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
                                                    {isAdmin && (
                                                        <div className='admin-div-product'>
                                                            <Link className='admin-btn-product rounded-pill' href={`/admin/products/${product.id}/edit`}>
                                                                Edit
                                                            </Link>
                                                            <button 
                                                                type="button" 
                                                                onClick={handleDelete} 
                                                                className='admin-btn-product rounded-pill'
                                                            >
                                                                Delete
                                                            </button>
                                                            <TogglePin product={product} />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

Index.layout = (page) => (
    page.props.auth && page.props.auth.user
        ? <AuthenticatedLayout>{page}</AuthenticatedLayout>
        : <GuestLayout>{page}</GuestLayout>
);