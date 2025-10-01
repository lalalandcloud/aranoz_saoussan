import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import Comments from '@/Components/Comments';

export default function Show({ blog, auth }) {
    return (
        <>
            <Head title={blog.titre} />
            
            <div>
                <Link href={route('public.blogs.index')}>← Retour aux blogs</Link>
                
                <h1>{blog.titre}</h1>
                
                <p>
                    Par {blog.user.first_name} {blog.user.last_name}
                    {' le '}
                    {new Date(blog.created_at).toLocaleDateString('fr-FR')}
                </p>

                <p>Catégorie: {blog.blog_cat?.name}</p>

                <p>
                    Tags: {blog.blog_tag?.map(tag => (
                        <span key={tag.id}>
                            {tag.name} <span dangerouslySetInnerHTML={{__html: tag.icon}} /> 
                        </span>
                    ))}
                </p>

                {blog.blog_imgs?.[0]?.img && (
                    <div>
                        <img src={`/storage/${blog.blog_imgs[0].img}`} alt={blog.titre} />
                    </div>
                )}

                {blog.blog_imgs?.[1]?.img2 && (
                    <div>
                        <img src={`/storage/${blog.blog_imgs[1].img2}`} alt={blog.titre} />
                    </div>
                )}

                <div>
                    <p>{blog.article}</p>
                </div>

                <hr />

                <Comments blog={blog} auth={auth} />
            </div>
        </>
    );
}

Show.layout = (page) => (
    page.props.auth && page.props.auth.user 
        ? <AuthenticatedLayout>{page}</AuthenticatedLayout>
        : <GuestLayout>{page}</GuestLayout>
);