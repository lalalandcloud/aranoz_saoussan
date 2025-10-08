import { Link, router, Head } from '@inertiajs/react'
import CouponForm from '@/Components/CouponForm';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Cart({ cartItems, cartTotal, cartCount, appliedCoupon, removeCoupon, discountAmount, finalTotal }) {
    const formatPrice = (price) => parseFloat(price).toFixed(2)

    const getPriceWithPromo = (product) => {
        if (!product.promo) return product.price
        return product.price - (product.price * product.promo.percent / 100)
    }

    const updateQuantity = (item, newQuantity) => {
        if (newQuantity < 1) return
        router.put(`/cart/${item.id}`, { quantity: newQuantity })
    }

    const removeItem = (item) => {
        router.delete(`/cart/${item.id}`)
    }

    const clearCart = () => {
        router.delete('/cart')
    }

    const calculateItemTotal = (item) => {
        const basePrice = getPriceWithPromo(item.product)
        return basePrice * item.quantity
    }

    return (
        <>
            <Head title="Panier" />
        
            <div className="page-container">
                <div className="page-header">
                    <h1 className="page-title">Mon Panier</h1>
                    {cartItems.length > 0 && (
                        <p className="page-subtitle">
                            {cartItems.length} article{cartItems.length > 1 ? 's' : ''} dans votre panier
                        </p>
                    )}
                </div>
                
                {cartItems.length === 0 ? (
                    <div className="empty-state">
                        <h2 className="empty-state-title">Votre panier est vide</h2>
                        <p className="empty-state-text">
                            Découvrez notre catalogue et ajoutez vos produits préférés
                        </p>
                        <Link href={route('public.home')} className="btn-primary-minimal">
                            Continuer mes achats
                        </Link>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-lg-8">
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item-card">
                                    <div className="d-flex gap-3">
                                        <img 
                                            src={`/storage/${item.product.img_main}`}
                                            alt={item.product.name}
                                            className="cart-item-image"
                                        />
                                        
                                        <div className="cart-item-content">
                                            <h3 className="cart-item-title">{item.product.name}</h3>
                                            
                                            <div className="d-flex align-items-center gap-2 mb-3">
                                                <span className="cart-item-price">
                                                    {formatPrice(getPriceWithPromo(item.product))}€
                                                </span>
                                                {item.product.promo && (
                                                    <span className="promo-badge">
                                                        -{item.product.promo.percent}%
                                                    </span>
                                                )}
                                            </div>
                                            
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="quantity-controls">
                                                    <button 
                                                        onClick={() => updateQuantity(item, item.quantity - 1)}
                                                        className="quantity-btn"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="quantity-value">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => updateQuantity(item, item.quantity + 1)}
                                                        className="quantity-btn"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                
                                                <div className="d-flex align-items-center gap-3">
                                                    <span style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>
                                                        {formatPrice(calculateItemTotal(item))}€
                                                    </span>
                                                    <button 
                                                        onClick={() => removeItem(item)}
                                                        className="btn-minimal"
                                                    >
                                                        Supprimer
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            <div className="d-flex justify-content-between mt-3">
                                <Link href={route('public.home')} className="btn-outline-minimal">
                                    Continuer mes achats
                                </Link>
                                <button onClick={clearCart} className="btn-minimal">
                                    Vider le panier
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="summary-card">
                                <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px' }}>
                                    Récapitulatif
                                </h2>
                                
                                <div className="summary-row">
                                    <span className="summary-label">Sous-total</span>
                                    <span className="summary-value">{formatPrice(cartTotal)}€</span>
                                </div>

                                {appliedCoupon ? (
                                    <div className="coupon-applied">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span style={{ fontSize: '14px', color: '#365314' }}>
                                                Code promo
                                            </span>
                                            <span className="coupon-code">{appliedCoupon.coupon.code}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span style={{ fontSize: '14px', color: '#365314' }}>
                                                Réduction ({appliedCoupon.coupon.percent}%)
                                            </span>
                                            <span style={{ fontWeight: '600', color: '#365314' }}>
                                                -{formatPrice(discountAmount || 0)}€
                                            </span>
                                        </div>
                                        <button 
                                            onClick={removeCoupon}
                                            className="btn-minimal w-100"
                                            style={{ fontSize: '13px' }}
                                        >
                                            Retirer le coupon
                                        </button>
                                    </div>
                                ) : (
                                    <div style={{ margin: '16px 0' }}>
                                        <CouponForm cartTotal={cartTotal} />
                                    </div>
                                )}

                                <div className="summary-total">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="summary-label">Total</span>
                                        <span className="summary-value">
                                            {formatPrice(cartTotal - (discountAmount || 0))}€
                                        </span>
                                    </div>
                                </div>

                                <button className="btn-primary-minimal w-100 mt-4">
                                    Passer la commande
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

Cart.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>;