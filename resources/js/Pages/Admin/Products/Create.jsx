import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Create({ categories }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        price: '',
        stock: '',
        pin: false,
        colour: '#000000',
        products_cat_id: '',
        promo_id: '',
        img_main: null,
        img_2: null,
        img_3: null,
        img_4: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('products.store'));
    };

    const handleFileChange = (field, file) => {
        setData(field, file);
    };

    return (
        <>
            <Head title="Créer un produit" />
            
            <div>
                <h1>Créer un nouveau produit</h1>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div>
                        <label>Nom du produit *</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        {errors.name && <div>{errors.name}</div>}
                    </div>

                    <div>
                        <label>Description *</label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            rows="4"
                            required
                        />
                        {errors.description && <div>{errors.description}</div>}
                    </div>

                    <div>
                        <label>Prix (€) *</label>
                        <input
                            type="number"
                            step="0.01"
                            min="0"
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                            required
                        />
                        {errors.price && <div>{errors.price}</div>}
                    </div>

                    <div>
                        <label>Stock *</label>
                        <input
                            type="number"
                            min="0"
                            value={data.stock}
                            onChange={(e) => setData('stock', e.target.value)}
                            required
                        />
                        {errors.stock && <div>{errors.stock}</div>}
                    </div>

                    <div>
                        <label>Catégorie *</label>
                        <select
                            value={data.products_cat_id}
                            onChange={(e) => setData('products_cat_id', e.target.value)}
                            required
                        >
                            <option value="">Sélectionner une catégorie</option>
                            {categories?.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        {errors.products_cat_id && <div>{errors.products_cat_id}</div>}
                    </div>

                    <div>
                        <label>Couleur *</label>
                        <input
                            type="color"
                            value={data.colour}
                            onChange={(e) => setData('colour', e.target.value)}
                            required
                        />
                        <span>{data.colour}</span>
                        {errors.colour && <div>{errors.colour}</div>}
                    </div>

                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={data.pin}
                                onChange={(e) => setData('pin', e.target.checked)}
                            />
                            Épingler ce produit
                        </label>
                    </div>

                    <h3>Images du produit</h3>

                    <div>
                        <label>Image principale *</label>
                        <input
                            type="file"
                            accept="image/jpeg,image/png,image/jpg,image/gif"
                            onChange={(e) => handleFileChange('img_main', e.target.files[0])}
                            required
                        />
                        {errors.img_main && <div>{errors.img_main}</div>}
                    </div>

                    <div>
                        <label>Image 2</label>
                        <input
                            type="file"
                            accept="image/jpeg,image/png,image/jpg,image/gif"
                            onChange={(e) => handleFileChange('img_2', e.target.files[0])}
                        />
                        {errors.img_2 && <div>{errors.img_2}</div>}
                    </div>

                    <div>
                        <label>Image 3</label>
                        <input
                            type="file"
                            accept="image/jpeg,image/png,image/jpg,image/gif"
                            onChange={(e) => handleFileChange('img_3', e.target.files[0])}
                        />
                        {errors.img_3 && <div>{errors.img_3}</div>}
                    </div>

                    <div>
                        <label>Image 4</label>
                        <input
                            type="file"
                            accept="image/jpeg,image/png,image/jpg,image/gif"
                            onChange={(e) => handleFileChange('img_4', e.target.files[0])}
                        />
                        {errors.img_4 && <div>{errors.img_4}</div>}
                    </div>

                    <div>
                        <button type="button" onClick={() => window.history.back()}>
                            Annuler
                        </button>
                        
                        <button type="submit" disabled={processing}>
                            {processing ? 'Création en cours...' : 'Créer le produit'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
Create.layout = (page) => (
    page.props.auth && page.props.auth.user 
        ? <AuthenticatedLayout>{page}</AuthenticatedLayout>
        : <GuestLayout>{page}</GuestLayout>
);
