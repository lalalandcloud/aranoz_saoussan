import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function Edit({ product, categories }) {
  const { data, setData, put, errors } = useForm({
    name: product.name || '',
    description: product.description || '',
    price: product.price || '',
    stock: product.stock || 0,
    pin: product.pin || false,
    colour: product.colour || '#000000',
    products_cat_id: product.products_cat_id || '',
    promo_id: product.promo_id || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(`/admin/products/${product.id}`);
  };

  return (
    <div>
      <h1>Modifier le produit</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
          />
          {errors.name && <div>{errors.name}</div>}
        </div>

        <div>
          <label>Description :</label>
          <textarea
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
          />
          {errors.description && <div>{errors.description}</div>}
        </div>

        <div>
          <label>Prix :</label>
          <input
            type="number"
            step="0.01"
            value={data.price}
            onChange={(e) => setData('price', e.target.value)}
          />
          {errors.price && <div>{errors.price}</div>}
        </div>

        <div>
          <label>Stock :</label>
          <input
            type="number"
            value={data.stock}
            onChange={(e) => setData('stock', e.target.value)}
          />
          {errors.stock && <div>{errors.stock}</div>}
        </div>

        <div>
          <label>Couleur :</label>
          <input
            type="color"
            value={data.colour}
            onChange={(e) => setData('colour', e.target.value)}
          />
          {errors.colour && <div>{errors.colour}</div>}
        </div>

        <div>
          <label>Catégorie :</label>
          <select
            value={data.products_cat_id}
            onChange={(e) => setData('products_cat_id', e.target.value)}
          >
            <option value="">-- Choisir --</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          {errors.products_cat_id && <div>{errors.products_cat_id}</div>}
        </div>

        <div>
          <label>Promotion (optionnel) :</label>
          <input
            type="number"
            value={data.promo_id || ''}
            onChange={(e) => setData('promo_id', e.target.value)}
          />
          {errors.promo_id && <div>{errors.promo_id}</div>}
        </div>

        <div>
          <label>Épinglé :</label>
          <input
            type="checkbox"
            checked={data.pin}
            onChange={(e) => setData('pin', e.target.checked)}
          />
        </div>

        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}
