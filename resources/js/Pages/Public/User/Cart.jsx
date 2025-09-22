// Cart.jsx - Version ultra simple
import { Link, router } from '@inertiajs/react'

export default function Cart({ cartItems, cartTotal, cartCount }) {
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

    return (
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
                            
                            <p>Total: {formatPrice(item.final_price)}€</p>
                            <button onClick={() => removeItem(item)}>Supprimer</button>
                            <hr />
                        </div>
                    ))}

                    <h2>TOTAL: {formatPrice(cartTotal)}€</h2>
                    <button>Commander</button>
                    <button onClick={clearCart}>Vider panier</button>
                </div>
            )}
        </div>
    )
}