import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function SearchBarP() {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get('/products/filter', { search });
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                className='input-search'
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Recherche"
            />
            <button className='product-btn-search' type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    );
}
