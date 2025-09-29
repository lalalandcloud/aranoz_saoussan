import { useForm } from '@inertiajs/react';

export default function CreateBlogTag() {
    const { data, setData, post, errors } = useForm({
        name: '',
        icon: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('blog_tags.store'));
    };

    return (
        <div>
            <h1>Créer un Tag</h1>
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
                    <label>Icône (HTML):</label>
                    <input 
                        type="text" 
                        value={data.icon} 
                        onChange={e => setData('icon', e.target.value)}
                        placeholder='<i class="fa-solid fa-heart"></i>'
                    />
                    {errors.icon && <div>{errors.icon}</div>}
                </div>

                <button type="submit">Créer</button>
            </form>
        </div>
    );
}

Create.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>;