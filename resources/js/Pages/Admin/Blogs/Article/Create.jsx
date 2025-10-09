import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import AdminBlogLayout from '@/Layouts/AdminBlogLayout';

export default function CreateBlog({ categories, tags }) {
    const { data, setData, post, errors, processing } = useForm({
        titre: '',
        article: '',
        blog_cat_id: '',
        tags: [],
        img: null,
        img2: null
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.blogs.article.store'));
    };

    return (
        <>
            <Head title="Créer un article" />
            
            <div className="admin-page-container">
                <div className="admin-page-header">
                    <h1 className="admin-page-title">Créer un article de blog</h1>
                </div>

                <form onSubmit={submit}>
                    <div className="admin-form-card">
                        <h2 className="admin-section-title">Contenu de l'article</h2>
                        
                        <div className="admin-form-group">
                            <label className="admin-form-label">Titre de l'article *</label>
                            <input 
                                type="text"
                                className="admin-input admin-input-large"
                                value={data.titre}
                                onChange={e => setData('titre', e.target.value)}
                                placeholder="Titre accrocheur de votre article"
                                required
                            />
                            {errors.titre && <div className="admin-error">{errors.titre}</div>}
                        </div>

                        <div className="admin-form-group">
                            <label className="admin-form-label">Contenu de l'article *</label>
                            <textarea 
                                className="admin-textarea admin-textarea-large"
                                value={data.article}
                                onChange={e => setData('article', e.target.value)}
                                rows="12"
                                placeholder="Rédigez votre article ici..."
                                required
                            />
                            {errors.article && <div className="admin-error">{errors.article}</div>}
                        </div>
                    </div>

                    <div className="admin-form-card">
                        <h2 className="admin-section-title">Classification</h2>
                        
                        <div className="admin-form-grid">
                            <div className="admin-form-group">
                                <label className="admin-form-label">Catégorie *</label>
                                <select 
                                    className="admin-select"
                                    value={data.blog_cat_id}
                                    onChange={e => setData('blog_cat_id', e.target.value)}
                                    required
                                >
                                    <option value="">Choisir une catégorie</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                                {errors.blog_cat_id && <div className="admin-error">{errors.blog_cat_id}</div>}
                            </div>

                            <div className="admin-form-group">
                                <label className="admin-form-label">Tags</label>
                                <div className="admin-tags-container">
                                    {tags.map(tag => (
                                        <label 
                                            key={tag.id}
                                            className={`admin-tag-item ${data.tags.includes(tag.id) ? 'admin-tag-item-selected' : ''}`}
                                        >
                                            <input 
                                                type="checkbox"
                                                className="admin-checkbox"
                                                value={tag.id}
                                                checked={data.tags.includes(tag.id)}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        setData('tags', [...data.tags, tag.id]);
                                                    } else {
                                                        setData('tags', data.tags.filter(t => t !== tag.id));
                                                    }
                                                }}
                                            />
                                            {tag.name}
                                        </label>
                                    ))}
                                </div>
                                {errors.tags && <div className="admin-error">{errors.tags}</div>}
                            </div>
                        </div>
                    </div>

                    <div className="admin-form-card">
                        <h2 className="admin-section-title">Images</h2>
                        
                        <div className="admin-form-grid">
                            <div className="admin-form-group">
                                <label className="admin-form-label">Image principale *</label>
                                <input 
                                    type="file"
                                    className="admin-input"
                                    accept="image/jpeg,image/png,image/jpg,image/gif"
                                    onChange={e => setData('img', e.target.files[0])}
                                    required
                                />
                                {errors.img && <div className="admin-error">{errors.img}</div>}
                            </div>

                            <div className="admin-form-group">
                                <label className="admin-form-label">Image secondaire</label>
                                <input 
                                    type="file"
                                    className="admin-input"
                                    accept="image/jpeg,image/png,image/jpg,image/gif"
                                    onChange={e => setData('img2', e.target.files[0])}
                                />
                                {errors.img2 && <div className="admin-error">{errors.img2}</div>}
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
                                className="admin-btn admin-btn-accent"
                                disabled={processing}
                            >
                                {processing ? 'Publication...' : 'Publier l\'article'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

CreateBlog.layout = (page) => (
    <AuthenticatedLayout>
        <AdminBlogLayout>
            {page}
        </AdminBlogLayout>
    </AuthenticatedLayout>
);