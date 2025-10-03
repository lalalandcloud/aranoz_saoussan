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
            
            <div className="category-form-container">
                <div className="category-form-card">
                    <h1 className="category-form-title">Créer une nouvelle catégorie</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="form-label fw-semibold">Nom de la catégorie *</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="Ex: Électronique, Vêtements..."
                                required
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-semibold">Image de la catégorie *</label>
                            <input
                                type="file"
                                className={`form-control ${errors.img ? 'is-invalid' : ''}`}
                                accept="image/jpeg,image/png,image/jpg"
                                onChange={handleImageChange}
                                required
                            />
                            {errors.img && <div className="invalid-feedback">{errors.img}</div>}
                            
                            {preview && (
                                <img 
                                    src={preview} 
                                    alt="Preview" 
                                    className="image-preview"
                                />
                            )}
                        </div>

                        <div className="d-flex gap-2">
                            <button 
                                type="button" 
                                className="btn btn-secondary"
                                onClick={() => window.history.back()}
                            >
                                Annuler
                            </button>
                            
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                disabled={processing}
                            >
                                {processing ? 'Création en cours...' : 'Créer la catégorie'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

Create.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>;