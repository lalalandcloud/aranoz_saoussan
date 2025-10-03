import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import PinButton from '@/Components/PinButton';
import AddToCart from '@/Components/AddToCart';
import TogglePin from '@/Components/TogglePin';

export default function Show({ product }) {
    return (
        <>
            <Head title={product.name} />
            
            <div>
                <Link href="/">← Retour à la liste</Link>
                
                <h1>{product.name}</h1>
                
                <div>
                    <img 
                        src={`/storage/${product.img_main}`} 
                        alt={product.name} 
                    />
                </div>
                
                <p>Prix: {product.price}€</p>
                
                <p>Stock: {product.stock}</p>
                
                <p>Catégorie: {product.category?.name}</p>
                
                <p>Couleur: {product.colour}</p>
                
                <PinButton product={product} />

                <AddToCart product={product} />
                
                <TogglePin product={product} />

                <h3>Description</h3>
                <p>{product.description}</p>
                
                {(product.img_2 || product.img_3 || product.img_4) && (
                    <div>
                        <h3>Images supplémentaires</h3>
                        {product.img_2 && (
                            <img 
                                src={`/storage/${product.img_2}`} 
                                alt={product.name} 
                            />
                        )}
                        {product.img_3 && (
                            <img 
                                src={`/storage/${product.img_3}`} 
                                alt={product.name} 
                            />
                        )}
                        {product.img_4 && (
                            <img 
                                src={`/storage/${product.img_4}`} 
                                alt={product.name} 
                            />
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
Show.layout = (page) => (
    page.props.auth && page.props.auth.user 
        ? <AuthenticatedLayout>{page}</AuthenticatedLayout>
        : <GuestLayout>{page}</GuestLayout>
);