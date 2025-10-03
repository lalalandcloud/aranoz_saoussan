import { Link, router, Head } from '@inertiajs/react'
import CouponForm from '@/Components/CouponForm';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Cart({ cartItems, cartTotal, cartCount, appliedCoupon, removeCoupon, discountAmount, finalTotal }) {    const formatPrice = (price) => parseFloat(price).toFixed(2)

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
        
            <div>
                <h1>Mon Panier</h1>
                
                {cartItems.length === 0 ? (
                    <div>
                        <p>Votre panier est vide</p>
                        <Link href="/">Continuer mes achats</Link>
                    </div>
                ) : (
                    <div>
                        {cartItems.map(item => (
                            <div key={item.id}>
                                <hr />
                                <img src={`/storage/${item.product.img_main}`} width="60" height="60" />
                                <h3>{item.product.name}</h3>
                                <p>Prix: {formatPrice(getPriceWithPromo(item.product))}€</p>
                                {item.product.promo && <p>PROMO -{item.product.promo.percent}%</p>}
                                
                                <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
                                {item.quantity}
                                <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                                
                                <p>Total: {formatPrice(calculateItemTotal(item))}€</p>
                                <button onClick={() => removeItem(item)}>Supprimer</button>
                                <hr />
                            </div>
                        ))}

                        <h2>SOUS-TOTAL: {formatPrice(cartTotal)}€</h2>

                        {appliedCoupon ? (
                            <div>
                                <p>Coupon appliqué: <strong>{appliedCoupon.coupon.code}</strong> (-{appliedCoupon.coupon.percent}%)</p>
                                <p>Réduction: -{formatPrice(discountAmount || 0)}€</p>
                                <button onClick={removeCoupon}>Retirer le coupon</button>
                            </div>
                        ) : (
                            <CouponForm cartTotal={cartTotal} />
                        )}

                        <h2>TOTAL: {formatPrice(cartTotal) - (discountAmount)}€</h2>

                        <button>Commander</button>
                        <button onClick={clearCart}>Vider panier</button>
                    </div>
                )}
            </div>
        </>
    )
}
Cart.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>;