import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminBlogLayout from '@/Layouts/AdminBlogLayout';

export default function CreateBlogTag() {
    const { data, setData, post, errors, processing } = useForm({
        name: '',
        icon: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.blogs.tag.store'));
    };

    return (
        <>
            <Head title="Créer un tag de blog" />

            <div className="admin-page-container">
                <div className="admin-page-header">
                    <h1 className="admin-page-title">Créer un tag</h1>
                    <p className="admin-page-subtitle">
                        Ajoutez des étiquettes pour catégoriser vos articles
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="admin-form-card">
                            <form onSubmit={submit}>
                                <div className="admin-form-group-large">
                                    <label className="admin-form-label">Nom du tag *</label>
                                    <input 
                                        type="text"
                                        className="admin-input admin-input-large"
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        placeholder="JavaScript, Design, Marketing..."
                                        required
                                    />
                                    {errors.name && <div className="admin-error">{errors.name}</div>}
                                </div>

                                <div className="admin-form-group-large">
                                    <label className="admin-form-label">Icône (HTML FontAwesome)</label>
                                    <input 
                                        type="text"
                                        className="admin-input admin-input-mono"
                                        value={data.icon}
                                        onChange={e => setData('icon', e.target.value)}
                                        placeholder='<i class="fa-solid fa-heart"></i>'
                                    />
                                    <p className="admin-helper-text">
                                        Collez le code HTML d'une icône FontAwesome
                                    </p>
                                    {errors.icon && <div className="admin-error">{errors.icon}</div>}
                                    
                                    {data.icon && (
                                        <div className="admin-icon-preview-box">
                                            <p className="admin-preview-label">Aperçu</p>
                                            <div className="admin-icon-preview" dangerouslySetInnerHTML={{ __html: data.icon }} />
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
                                        {processing ? 'Création...' : 'Créer le tag'}
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

CreateBlogTag.layout = (page) => (
    <AuthenticatedLayout>
        <AdminBlogLayout>
            {page}
        </AdminBlogLayout>
    </AuthenticatedLayout>
);