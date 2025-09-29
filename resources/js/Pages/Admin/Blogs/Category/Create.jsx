import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CreateBlogCat() {
    const { data, setData, post, errors } = useForm({
        name: '',
        img: ''
    });

    const submit = (e) => {
        e.preventDefault();
       post(route('blogs.category.store'));
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
                        <label>Image (URL):</label>
                        <input 
                            type="text" 
                            value={data.img} 
                            onChange={e => setData('img', e.target.value)}
                        />
                        {errors.img && <div>{errors.img}</div>}
                    </div>

                    <button type="submit">Créer</button>
                </form>
            </div>
        </>
    );
}
CreateBlogCat.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>;