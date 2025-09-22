import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import PinButton from '@/Components/PinButton';
import AddToCart from '@/Components/AddToCart';

import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Home({ products, categories, auth }) {
    return (
        <>
            <Head title="Catalogue" />
            
            <div>
                <h1>Catalogue de produits</h1>
                
                
                {auth?.user && (
                    <div>
                        <Link href="/public/user/pins">❤️ Mes favoris</Link>
                    </div>
                )}
                
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
                                
                                <PinButton product={product} />
                                

                                <p>Prix: {product.price}€</p>
                                <p>Stock: {product.stock}</p>
                                <p>Catégorie: {product.category?.name}</p>
                                
                                <AddToCart product={product} />
                                
                                {product.pin && <p>⭐ Épinglé par l'admin</p>}
                                
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