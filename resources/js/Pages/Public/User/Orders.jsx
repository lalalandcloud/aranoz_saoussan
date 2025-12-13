import { Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Orders({ orders }) {
    const formatPrice = (price) => parseFloat(price).toFixed(2)

    const getStatusBadge = (status) => {
        const badges = {
            pending: { text: 'En attente', class: 'bg-warning' },
            confirmed: { text: 'Confirmée', class: 'bg-success' },
            cancelled: { text: 'Annulée', class: 'bg-danger' }
        }
        const badge = badges[status] || badges.pending
        return <span className={`badge ${badge.class}`}>{badge.text}</span>
    }

    return (
        <>
            <Head title="Mes commandes" />
        
            <div className="page-container">
                <div className="page-header">
                    <h1 className="page-title">Mes Commandes</h1>
                    <p className="page-subtitle">
                        {orders.length} commande{orders.length > 1 ? 's' : ''}
                    </p>
                </div>
                
                {orders.length === 0 ? (
                    <div className="empty-state">
                        <h2 className="empty-state-title">Aucune commande</h2>
                        <p className="empty-state-text">
                            Vous n'avez pas encore passé de commande
                        </p>
                    </div>
                ) : (
                    <div className="row">
                        {orders.map(order => (
                            <div key={order.id} className="col-12 mb-4">
                                <div className="cart-item-card">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div>
                                            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                                                Commande #{order.id}
                                            </h3>
                                            <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
                                                {new Date(order.created_at).toLocaleDateString('fr-FR', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </p>
                                        </div>
                                        {getStatusBadge(order.status)}
                                    </div>

                                    <div className="mb-3">
                                        {order.items.map(item => (
                                            <div key={item.id} className="d-flex justify-content-between align-items-center py-2 border-bottom">
                                                <div>
                                                    <strong>{item.product.name}</strong>
                                                    <span className="text-muted ms-2">x {item.quantity}</span>
                                                </div>
                                                <span>{formatPrice(item.total_price)}€</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            {order.discount_amount > 0 && (
                                                <p style={{ fontSize: '14px', color: '#16a34a', margin: 0 }}>
                                                    Réduction: -{formatPrice(order.discount_amount)}€
                                                </p>
                                            )}
                                        </div>
                                        <div className="text-end">
                                            <strong style={{ fontSize: '20px' }}>
                                                {formatPrice(order.final_total)}€
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

Orders.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>;