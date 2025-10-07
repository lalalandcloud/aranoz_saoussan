import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function CreateBlog({ categories, tags }) {
    const { data, setData, post, errors } = useForm({
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
            <div>
                <h1>Créer un Blog</h1>
                <form onSubmit={submit}>
                    <div>
                        <label>Titre:</label>
                        <input 
                            type="text" 
                            value={data.titre} 
                            onChange={e => setData('titre', e.target.value)}
                        />
                        {errors.titre && <div>{errors.titre}</div>}
                    </div>

                    <div>
                        <label>Article:</label>
                        <textarea 
                            value={data.article} 
                            onChange={e => setData('article', e.target.value)}
                            rows="10"
                        />
                        {errors.article && <div>{errors.article}</div>}
                    </div>

                    <div>
                        <label>Catégorie:</label>
                        <select 
                            value={data.blog_cat_id} 
                            onChange={e => setData('blog_cat_id', e.target.value)}
                        >
                            <option value="">Choisir une catégorie</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                        {errors.blog_cat_id && <div>{errors.blog_cat_id}</div>}
                    </div>

                    <div>
                        <label>Tags:</label>
                        {tags.map(tag => (
                            <label key={tag.id}>
                                <input 
                                    type="checkbox" 
                                    value={tag.id}
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
                        {errors.tags && <div>{errors.tags}</div>}
                    </div>

                    <div>
                        <label>Image principale:</label>
                        <input 
                            type="file" 
                            onChange={e => setData('img', e.target.files[0])}
                        />
                        {errors.img && <div>{errors.img}</div>}
                    </div>

                    <div>
                        <label>Image secondaire:</label>
                        <input 
                            type="file" 
                            onChange={e => setData('img2', e.target.files[0])}
                        />
                        {errors.img2 && <div>{errors.img2}</div>}
                    </div>

                    <button type="submit">Créer</button>
                </form>
            </div>
        </>
    );
}
CreateBlog.layout = (page) => <AuthenticatedLayout>        <AdminLayout>
            {page}
        </AdminLayout>
</AuthenticatedLayout>;