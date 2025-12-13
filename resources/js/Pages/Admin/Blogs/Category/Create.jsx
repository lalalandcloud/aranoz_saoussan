import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminBlogLayout from '@/Layouts/AdminBlogLayout';
import { useState } from 'react';

export default function CreateBlogCat() {
    const [preview, setPreview] = useState(null);
    
    const { data, setData, post, errors, processing } = useForm({
        name: '',
        img: null
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

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.blogs.category.store'), {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Créer une catégorie de blog" />
        
            <div className="admin-page-container">
                <div className="admin-page-header">
                    <h1 className="admin-page-title">Créer une catégorie de blog</h1>
                    <p className="admin-page-subtitle">
                        Organisez vos articles par thématiques
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="admin-form-card">
                            <form onSubmit={submit}>
                                <div className="admin-form-group-large">
                                    <label className="admin-form-label">Nom de la catégorie *</label>
                                    <input 
                                        type="text"
                                        className="admin-input admin-input-large"
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        placeholder="Technologie, Lifestyle, Business..."
                                        required
                                    />
                                    {errors.name && <div className="admin-error">{errors.name}</div>}
                                </div>

                                <div className="admin-form-group-large">
                                    <label className="admin-form-label">Image de la catégorie *</label>
                                    <input 
                                        type="file"
                                        className="admin-input"
                                        accept="image/jpeg,image/png,image/jpg,image/gif"
                                        onChange={handleImageChange}
                                        required
                                    />
                                    {errors.img && <div className="admin-error">{errors.img}</div>}
                                    
                                    {preview && (
                                        <div>
                                            <p className="admin-preview-label">Aperçu</p>
                                            <img 
                                                src={preview}
                                                alt="Preview"
                                                className="admin-image-preview"
                                            />
                                        </div>
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
                                        className="admin-btn admin-btn-accent"
                                        disabled={processing}
                                    >
                                        {processing ? 'Création...' : 'Créer la catégorie'}
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

CreateBlogCat.layout = (page) => (
    <AuthenticatedLayout>
        <AdminBlogLayout>
            {page}
        </AdminBlogLayout>
    </AuthenticatedLayout>
);