import { useState, useEffect } from 'react'
import { Link } from '@inertiajs/react'

export default function CartCounter() {
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        fetchCartCount()
    }, [])

    const fetchCartCount = async () => {
        try {
            const response = await fetch('/cart/count')
            const data = await response.json()
            setCartCount(data.count)
        } catch (error) {
            console.error('Erreur:', error)
        }
    }

    return (
        <div>
            <Link href="/public/user/cart">
                🛒 Panier ({cartCount})
            </Link>
        </div>
    )
}