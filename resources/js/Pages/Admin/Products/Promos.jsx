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
            <div>
                <h1>GESTION PROMOS</h1>
                <hr />
                
                <h2>ACTIONS</h2>
                <button onClick={applyRandomPromos}>
                    APPLIQUER PROMOS ALEATOIRES (30%)
                </button>
                <br />
                <button onClick={removeAllPromos}>
                    SUPPRIMER TOUTES LES PROMOS
                </button>
                <hr />
                
                <h2>PROMOS DISPONIBLES ({promos?.length || 0})</h2>
                <table border="1" width="100%">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Pourcentage</th>
                            <th>Nb Produits</th>
                        </tr>
                    </thead>
                    <tbody>
                        {promos?.map(promo => (
                            <tr key={promo.id}>
                                <td>{promo.name}</td>
                                <td>-{promo.percent}%</td>
                                <td>{promo.products_count || 0}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <hr />
                
                <h2>PRODUITS EN PROMO ({productsWithPromo?.length || 0})</h2>
                {productsWithPromo?.length > 0 ? (
                    <table border="1" width="100%">
                        <thead>
                            <tr>
                                <th>Produit</th>
                                <th>Prix Normal</th>
                                <th>Promo</th>
                                <th>Prix Final</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productsWithPromo.map(product => {
                                const discount = (product.price * product.promo.percent) / 100;
                                const finalPrice = product.price - discount;
                                return (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.price}€</td>
                                        <td>-{product.promo.percent}% ({product.promo.name})</td>
                                        <td>{finalPrice.toFixed(2)}€</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                ) : (
                    <p>Aucun produit en promo</p>
                )}
            </div>
        </>
    );
}

// PromosIndex.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>;


PromosIndex.layout = (page) => (
    <AuthenticatedLayout>
        <AdminLayout>
            {page}
        </AdminLayout>
    </AuthenticatedLayout>
);