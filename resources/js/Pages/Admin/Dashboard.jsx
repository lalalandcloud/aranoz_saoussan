import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Dashboard({ users, roles, products, cartItems, userPins, pendingOrders }) {
    
    console.log('pendingOrders:', pendingOrders);
    const deleteUser = (userId) => {
        if (confirm('Supprimer cet utilisateur ?')) {
            router.delete(`/admin/users/${userId}`);
        }
    };

    return (
        <>
            <Head title="Dashboard Admin" />
            
            <div className="admin-page-container">
                <div className="admin-page-header">
                    <h1 className="admin-page-title">Dashboard Admin</h1>
                    <p className="admin-page-subtitle">Vue d'ensemble de votre plateforme</p>
                </div>

                {/* Stats Cards */}
                <div className="row g-3 mb-5">
                    <div className="col-md-3">
                        <div className="admin-stats-card">
                            <div className="admin-stats-value">{users?.length || 0}</div>
                            <div className="admin-stats-label">Utilisateurs</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="admin-stats-card">
                            <div className="admin-stats-value">{products?.length || 0}</div>
                            <div className="admin-stats-label">Produits</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="admin-stats-card">
                            <div className="admin-stats-value">{cartItems?.length || 0}</div>
                            <div className="admin-stats-label">Paniers actifs</div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="admin-stats-card">
                            <div className="admin-stats-value">{userPins?.length || 0}</div>
                            <div className="admin-stats-label">Favoris</div>
                        </div>
                    </div>
                </div>

                {pendingOrders && pendingOrders.length > 0 && (
                    <div className="admin-form-card mb-4" style={{ borderLeft: '4px solid #f59e0b' }}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h2 className="admin-section-title mb-0"> Commandes en attente de confirmation</h2>
                            <span className="admin-badge" style={{ backgroundColor: '#f59e0b' }}>
                                {pendingOrders.length}
                            </span>
                        </div>
                        <div className="admin-table-container">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Client</th>
                                        <th>Produits</th>
                                        <th>Total</th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pendingOrders.map(order => (
                                        <tr key={order.id}>
                                            <td>#{order.id}</td>
                                            <td>
                                                {order.user.first_name} {order.user.last_name}
                                                <br />
                                                <small style={{ color: '#6b7280' }}>{order.user.email}</small>
                                            </td>
                                            <td>
                                                {order.items.map(item => (
                                                    <div key={item.id} style={{ fontSize: '14px' }}>
                                                        {item.product.name} x{item.quantity}
                                                    </div>
                                                ))}
                                            </td>
                                            <td className="admin-price">
                                                {parseFloat(order.final_total).toFixed(2)}€
                                                {order.discount_amount > 0 && (
                                                    <div style={{ fontSize: '12px', color: '#16a34a' }}>
                                                        (-{parseFloat(order.discount_amount).toFixed(2)}€)
                                                    </div>
                                                )}
                                            </td>
                                            <td>
                                                {new Date(order.created_at).toLocaleDateString('fr-FR', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <button 
                                                        onClick={() => {
                                                            if (confirm('Confirmer cette commande et diminuer le stock ?')) {
                                                                router.post(`/admin/orders/${order.id}/confirm`);
                                                            }
                                                        }}
                                                        className="admin-btn"
                                                        style={{ backgroundColor: '#16a34a', color: 'white' }}
                                                    >
                                                        Confirmer
                                                    </button>
                                                    <button 
                                                        onClick={() => {
                                                            if (confirm('Annuler cette commande ?')) {
                                                                router.post(`/admin/orders/${order.id}/cancel`);
                                                            }
                                                        }}
                                                        className="admin-btn admin-btn-danger"
                                                    >
                                                        Annuler
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                {/* Utilisateurs */}
                <div className="admin-form-card mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="admin-section-title mb-0">Utilisateurs</h2>
                        <span className="admin-badge">{users?.length || 0}</span>
                    </div>
                    
                    <div className="admin-table-container">
                        <table className="admin-table">
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
                                {users?.length > 0 ? (
                                    users.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address}</td>
                                            <td>
                                                <span className="admin-badge">{user.role?.name || 'Aucun'}</span>
                                            </td>
                                            <td>{new Date(user.created_at).toLocaleDateString()}</td>
                                            <td>
                                                <button 
                                                    onClick={() => deleteUser(user.id)}
                                                    className="admin-btn admin-btn-danger"
                                                >
                                                    Supprimer
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="admin-empty-state">
                                            Aucun utilisateur
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Produits */}
                <div className="admin-form-card mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="admin-section-title mb-0">Produits</h2>
                        <div className="d-flex gap-2 align-items-center">
                            <span className="admin-badge">{products?.length || 0}</span>
                            <Link href="/admin/products/create" className="admin-btn admin-btn-primary">
                                Ajouter un produit
                            </Link>
                        </div>
                    </div>
                    
                    <div className="admin-table-container">
                        <table className="admin-table">
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
                                {products?.length > 0 ? (
                                    products.map(product => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td className="admin-price">{product.price}€</td>
                                            <td>{product.stock}</td>
                                            <td>{product.category?.name}</td>
                                            <td>
                                                {product.promo ? (
                                                    <span className="admin-badge">-{product.promo.percent}%</span>
                                                ) : (
                                                    <span className="text-muted">Non</span>
                                                )}
                                            </td>
                                            <td>{new Date(product.created_at).toLocaleDateString()}</td>
                                            <td>
                                                <Link href={`/products/${product.id}`} className="admin-btn">
                                                    Voir
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="admin-empty-state">
                                            Aucun produit
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Paniers actifs */}
                <div className="admin-form-card mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="admin-section-title mb-0">Paniers actifs</h2>
                        <span className="admin-badge">{cartItems?.length || 0}</span>
                    </div>
                    
                    <div className="admin-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Utilisateur</th>
                                    <th>Produit</th>
                                    <th>Quantité</th>
                                    <th>Ajouté le</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems?.length > 0 ? (
                                    cartItems.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.user?.first_name} {item.user?.last_name}</td>
                                            <td>{item.product?.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>{new Date(item.created_at).toLocaleDateString()}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="admin-empty-state">
                                            Aucun panier actif
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Produits favoris */}
                <div className="admin-form-card mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="admin-section-title mb-0">Produits favoris</h2>
                        <span className="admin-badge">{userPins?.length || 0}</span>
                    </div>
                    
                    <div className="admin-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Utilisateur</th>
                                    <th>Produit</th>
                                    <th>Ajouté le</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userPins?.length > 0 ? (
                                    userPins.map(pin => (
                                        <tr key={pin.id}>
                                            <td>{pin.user?.first_name} {pin.user?.last_name}</td>
                                            <td>{pin.product?.name}</td>
                                            <td>{new Date(pin.created_at).toLocaleDateString()}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="admin-empty-state">
                                            Aucun favori
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Rôles */}
                <div className="admin-form-card">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2 className="admin-section-title mb-0">Rôles</h2>
                        <span className="admin-badge">{roles?.length || 0}</span>
                    </div>
                    
                    <div className="admin-roles-list">
                        {roles?.length > 0 ? (
                            roles.map(role => (
                                <div key={role.id} className="admin-role-item">
                                    {role.name}
                                </div>
                            ))
                        ) : (
                            <p className="admin-empty-state">Aucun rôle</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page) => (
    <AuthenticatedLayout>
        <AdminLayout>
            {page}
        </AdminLayout>
    </AuthenticatedLayout>
);