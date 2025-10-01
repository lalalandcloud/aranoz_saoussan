import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import React from 'react';
import { Link } from '@inertiajs/react';


export default function Index({ blogs }) {
    
    return (
        <div>
            <h1>Liste des Blogs</h1>
            
            {blogs.map((blog) => (
                
                <div key={blog.id}>
                    <Link href={route('public.blogs.show', blog.id)} className="nav-link">
                        <h2>{blog.titre}</h2>
                    </Link>
                    <p>{blog.article}</p>
                    <p>Auteur: {blog.user?.first_name} {blog.user?.last_name}</p>
                    <p>Tags: {blog.blog_tag?.map(tag => (
                        <span key={tag.id}>
                            {tag.name} <span dangerouslySetInnerHTML={{__html: tag.icon}} />
                        </span>
                    ))}</p>
                    <p>Catégorie: {blog.blog_cat?.name}</p>
                    {blog.blog_imgs?.[0]?.img && (
                        <img src={`/storage/${blog.blog_imgs[0].img}`} alt={blog.titre} />
                    )}
                </div>
            ))}
        </div>
    );
}
Index.layout = (page) => (
    page.props.auth && page.props.auth.user 
        ? <AuthenticatedLayout>{page}</AuthenticatedLayout>
        : <GuestLayout>{page}</GuestLayout>
);