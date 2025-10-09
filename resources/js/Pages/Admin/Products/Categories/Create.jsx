import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Create() {
    const [preview, setPreview] = useState(null);
    
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        img: null,
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData('img', file);
        
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.categories.store'), {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Créer une catégorie" />
            
            <div className="admin-page-container">
                <div className="admin-page-header">
                    <h1 className="admin-page-title">Créer une nouvelle catégorie</h1>
                </div>

                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="admin-form-card">
                            <form onSubmit={handleSubmit}>
                                <div className="admin-form-group">
                                    <label className="admin-form-label">Nom de la catégorie *</label>
                                    <input
                                        type="text"
                                        className="admin-input"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Électronique, Vêtements, Mobilier..."
                                        required
                                    />
                                    {errors.name && <div className="admin-error">{errors.name}</div>}
                                </div>

                                <div className="admin-form-group">
                                    <label className="admin-form-label">Image de la catégorie *</label>
                                    <input
                                        type="file"
                                        className="admin-input"
                                        accept="image/jpeg,image/png,image/jpg"
                                        onChange={handleImageChange}
                                        required
                                    />
                                    {errors.img && <div className="admin-error">{errors.img}</div>}
                                    
                                    {preview && (
                                        <img 
                                            src={preview}
                                            alt="Preview"
                                            className="admin-image-preview"
                                        />
                                    )}
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
                                        {processing ? 'Création en cours...' : 'Créer la catégorie'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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