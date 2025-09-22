import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';


import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Home({ products, categories }) {
    return (
        <>
            <Head title="Catalogue" />
            
            <div>
                <h1>Catalogue de produits</h1>
                
                <Link href="/products/create">Ajouter un produit</Link>
                
                <h2>Catégories</h2>
                <ul>
                    {categories?.map((category) => (
                        <li key={category.id}>
                            {category.name}
                        </li>
                    ))}
                </ul>
                
                <h2>Produits</h2>
                
                {products?.length === 0 ? (
                    <p>Aucun produit disponible</p>
                ) : (
                    <div>
                        {products?.map((product) => (
                            <div key={product.id}>
                                <h3>{product.name}</h3>
                                
                                <img 
                                    src={`/storage/${product.img_main}`} 
                                    alt={product.name}
                                />
                                
                                <p>Prix: {product.price}€</p>
                                <p>Stock: {product.stock}</p>
                                <p>Catégorie: {product.category?.name}</p>
                                
                                <p>&#9829; {product.pin} &#9829;</p>                              
                                
                                <p>{product.description}</p>
                                
                                <Link href={`/products/${product.id}`}>Voir détails</Link>
            
                                <hr />
                            </div>
                        ))}
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