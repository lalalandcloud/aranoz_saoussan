import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminLayout from '@/Layouts/AdminLayout';

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
        post(route('admin.products.store'));
    };

    const handleFileChange = (field, file) => {
        setData(field, file);
    };

    return (
        <>
            <Head title="Créer un produit" />
            
            <div className="admin-page-container">
                <div className="admin-page-header">
                    <h1 className="admin-page-title">Créer un nouveau produit</h1>
                </div>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="admin-form-card">
                        <h2 className="admin-section-title">Informations générales</h2>
                        
                        <div className="admin-form-grid">
                            <div className="admin-form-grid-full">
                                <div className="admin-form-group">
                                    <label className="admin-form-label">Nom du produit *</label>
                                    <input
                                        type="text"
                                        className="admin-input"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Nom du produit"
                                        required
                                    />
                                    {errors.name && <div className="admin-error">{errors.name}</div>}
                                </div>
                            </div>

                            <div className="admin-form-grid-full">
                                <div className="admin-form-group">
                                    <label className="admin-form-label">Description *</label>
                                    <textarea
                                        className="admin-textarea"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        placeholder="Description détaillée du produit"
                                        required
                                    />
                                    {errors.description && <div className="admin-error">{errors.description}</div>}
                                </div>
                            </div>

                            <div className="admin-form-group">
                                <label className="admin-form-label">Prix (€) *</label>
                                <input
                                    type="number"
                                    className="admin-input"
                                    step="0.01"
                                    min="0"
                                    value={data.price}
                                    onChange={(e) => setData('price', e.target.value)}
                                    placeholder="29.99"
                                    required
                                />
                                {errors.price && <div className="admin-error">{errors.price}</div>}
                            </div>

                            <div className="admin-form-group">
                                <label className="admin-form-label">Stock *</label>
                                <input
                                    type="number"
                                    className="admin-input"
                                    min="0"
                                    value={data.stock}
                                    onChange={(e) => setData('stock', e.target.value)}
                                    placeholder="100"
                                    required
                                />
                                {errors.stock && <div className="admin-error">{errors.stock}</div>}
                            </div>

                            <div className="admin-form-group">
                                <label className="admin-form-label">Catégorie *</label>
                                <select
                                    className="admin-select"
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
                                {errors.products_cat_id && <div className="admin-error">{errors.products_cat_id}</div>}
                            </div>

                            <div className="admin-form-group">
                                <label className="admin-form-label">Couleur *</label>
                                <input
                                    type="color"
                                    className="admin-input"
                                    value={data.colour}
                                    onChange={(e) => setData('colour', e.target.value)}
                                    required
                                />
                                <div className="admin-color-display">
                                    <div 
                                        className="admin-color-swatch"
                                        style={{ backgroundColor: data.colour }}
                                    ></div>
                                    <span className="admin-color-value">{data.colour}</span>
                                </div>
                                {errors.colour && <div className="admin-error">{errors.colour}</div>}
                            </div>

                            <div className="admin-form-grid-full">
                                <div className="admin-checkbox-wrapper">
                                    <input
                                        type="checkbox"
                                        id="pin-checkbox"
                                        className="admin-checkbox"
                                        checked={data.pin}
                                        onChange={(e) => setData('pin', e.target.checked)}
                                    />
                                    <label htmlFor="pin-checkbox" className="admin-checkbox-label">
                                        Épingler ce produit sur la page d'accueil
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="admin-form-card">
                        <h2 className="admin-section-title">Images du produit</h2>
                        
                        <div className="admin-form-grid">
                            <div className="admin-form-group">
                                <label className="admin-form-label">Image principale *</label>
                                <input
                                    type="file"
                                    className="admin-input"
                                    accept="image/jpeg,image/png,image/jpg,image/gif"
                                    onChange={(e) => handleFileChange('img_main', e.target.files[0])}
                                    required
                                />
                                {errors.img_main && <div className="admin-error">{errors.img_main}</div>}
                            </div>

                            <div className="admin-form-group">
                                <label className="admin-form-label">Image 2</label>
                                <input
                                    type="file"
                                    className="admin-input"
                                    accept="image/jpeg,image/png,image/jpg,image/gif"
                                    onChange={(e) => handleFileChange('img_2', e.target.files[0])}
                                />
                                {errors.img_2 && <div className="admin-error">{errors.img_2}</div>}
                            </div>

                            <div className="admin-form-group">
                                <label className="admin-form-label">Image 3</label>
                                <input
                                    type="file"
                                    className="admin-input"
                                    accept="image/jpeg,image/png,image/jpg,image/gif"
                                    onChange={(e) => handleFileChange('img_3', e.target.files[0])}
                                />
                                {errors.img_3 && <div className="admin-error">{errors.img_3}</div>}
                            </div>

                            <div className="admin-form-group">
                                <label className="admin-form-label">Image 4</label>
                                <input
                                    type="file"
                                    className="admin-input"
                                    accept="image/jpeg,image/png,image/jpg,image/gif"
                                    onChange={(e) => handleFileChange('img_4', e.target.files[0])}
                                />
                                {errors.img_4 && <div className="admin-error">{errors.img_4}</div>}
                            </div>
                        </div>

                        <div className="admin-form-actions">
                            <button 
                                type="button"
                                className="admin-btn"
                                onClick={() => window.history.back()}
                            >
                                Annuler
                            </button>
                            
                            <button 
                                type="submit"
                                className="admin-btn admin-btn-primary"
                                disabled={processing}
                            >
                                {processing ? 'Création en cours...' : 'Créer le produit'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

Create.layout = (page) => (
    <AuthenticatedLayout>
        <AdminLayout>
            {page}
        </AdminLayout>
    </AuthenticatedLayout>
);