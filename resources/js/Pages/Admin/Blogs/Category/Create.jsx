import { useForm } from '@inertiajs/react';

export default function CreateBlogCat() {
    const { data, setData, post, errors } = useForm({
        name: '',
        img: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('blog_cats.store'));
    };

    return (
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
    );
}
Create.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>;