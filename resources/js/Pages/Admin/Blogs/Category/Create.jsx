import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CreateBlogCat() {
    const { data, setData, post, errors, processing } = useForm({
        name: '',
        img: null
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.blogs.category.store'), {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Créer une catégorie de blog" />
        
            <div>
                <h1>Créer une Catégorie</h1>
                <form onSubmit={submit}>
                    <div>
                        <label>Nom:</label>
                        <input 
                            type="text" 
                            value={data.name} 
                            onChange={e => setData('name', e.target.value)}
                        />
                        {errors.name && <div>{errors.name}</div>}
                    </div>

                    <div>
                        <label>Image:</label>
                        <input 
                            type="file" 
                            accept="image/jpeg,image/png,image/jpg,image/gif"
                            onChange={e => setData('img', e.target.files[0])}
                        />
                        {errors.img && <div>{errors.img}</div>}
                    </div>

                    <button type="submit" disabled={processing}>
                        {processing ? 'Création...' : 'Créer'}
                    </button>
                </form>
            </div>
        </>
    );
}
CreateBlogCat.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>;