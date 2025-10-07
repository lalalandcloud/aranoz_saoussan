import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Dashboard({ users, roles, products, cartItems, userPins }) {
    
    const deleteUser = (userId) => {
        if (confirm('Supprimer cet utilisateur ?')) {
            router.delete(`/admin/users/${userId}`);
        }
    };

    return (
        <>
            <Head title="Dashboard Admin" />
            <div>
                <h1>DASHBOARD ADMIN</h1>
                <hr />

                <h2>RESUMÉ</h2>
                <p>Utilisateurs: {users?.length || 0}</p>
                <p>Produits: {products?.length || 0}</p>
                <p>Articles dans paniers: {cartItems?.length || 0}</p>
                <p>Produits aimés: {userPins?.length || 0}</p>
                <hr />

                <h2>UTILISATEURS ({users?.length || 0})</h2>
                <table border="1" width="100%">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Prénom</th>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Adresse</th>
                            <th>Rôle</th>
                            <th>Inscrit le</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.role?.name || 'Aucun'}</td>
                                <td>{new Date(user.created_at).toLocaleDateString()}</td>
                                <td>
                                    <button onClick={() => deleteUser(user.id)}>
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                <hr />

                <h2>PRODUITS ({products?.length || 0})</h2>
                {products?.length > 0 ? (
                    <table border="1" width="100%">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nom</th>
                                <th>Prix</th>
                                <th>Stock</th>
                                <th>Catégorie</th>
                                <th>Promo</th>
                                <th>Créé le</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}€</td>
                                    <td>{product.stock}</td>
                                    <td>{product.category?.name}</td>
                                    <td>{product.promo ? `-${product.promo.percent}%` : 'Non'}</td>
                                    <td>{new Date(product.created_at).toLocaleDateString()}</td>
                                    <td>
                                        <Link href={`/products/${product.id}`}>Voir</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Aucun produit</p>
                )}
                
                <hr />

                <h2>PANIERS ACTIFS ({cartItems?.length || 0})</h2>
                {cartItems?.length > 0 ? (
                    <table border="1" width="100%">
                        <thead>
                            <tr>
                                <th>Utilisateur</th>
                                <th>Produit</th>
                                <th>Quantité</th>
                                <th>Ajouté le</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.user?.first_name} {item.user?.last_name}</td>
                                    <td>{item.product?.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{new Date(item.created_at).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Aucun panier actif</p>
                )}
                
                <hr />

                <h2>PRODUITS FAVORIS ({userPins?.length || 0})</h2>
                {userPins?.length > 0 ? (
                    <table border="1" width="100%">
                        <thead>
                            <tr>
                                <th>Utilisateur</th>
                                <th>Produit</th>
                                <th>Ajouté le</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userPins.map(pin => (
                                <tr key={pin.id}>
                                    <td>{pin.user?.first_name} {pin.user?.last_name}</td>
                                    <td>{pin.product?.name}</td>
                                    <td>{new Date(pin.created_at).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Aucun favori</p>
                )}
                
                <hr />
                
                <h2>ROLES ({roles?.length || 0})</h2>
                <ul>
                    {roles?.map(role => (
                        <li key={role.id}>
                            <strong>{role.name}</strong>
                        </li>
                    ))}
                </ul>
                
                <hr />
                
                <h2>ACTIONS</h2>
                <Link href="/admin/products/create">
                    <button>Ajouter un produit</button>
                </Link>
            </div>
        </>
    );
}

Dashboard.layout = (page) => <AuthenticatedLayout>        <AdminLayout>
            {page}
        </AdminLayout>
</AuthenticatedLayout>;