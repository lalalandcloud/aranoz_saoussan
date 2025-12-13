import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function CategoryFilter({ categories }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (categoryId) => {
        if (categoryId === selectedCategory) {
            setSelectedCategory(null);
            router.get('/products');
        } else {
            setSelectedCategory(categoryId);
            router.get('/products/filter', { category_id: categoryId });
        }
    };

    return (
        <div className="category-filter">
            <button
                className={`category-item ${selectedCategory === null ? 'active' : ''}`}
                onClick={() => handleCategoryClick(null)}
            >
                Toutes les catégories
            </button>
            
            {categories.map((category) => (
                <button
                    key={category.id}
                    className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(category.id)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
}
