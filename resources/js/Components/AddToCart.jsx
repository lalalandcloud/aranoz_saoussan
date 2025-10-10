// AddToCart.jsx - Version ultra simple
import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function AddToCart({ product }) {
    const [quantity, setQuantity] = useState(1)

    const addToCart = () => {
        router.post(`/cart/add/${product.id}`, {
            quantity: quantity
        })
    }

    return (
        <div>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            {quantity}
            <button onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}>+</button>
            
            <button onClick={addToCart} disabled={product.stock === 0}>
                {product.stock === 0 ? 'Rupture' : 'Ajouter au panier'}
            </button>
        </div>
    )
}