import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import React from 'react';
import { Link } from '@inertiajs/react';

export default function Index({ blogs }) {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">Liste des Blogs</h1>

            <div className="row g-4 ">
                {blogs.map((blog) => {
                    const imageUrl = blog.blog_imgs?.[0]?.img
                        ? `/storage/${blog.blog_imgs[0].img}`
                        : '/images/placeholder.jpg';

                    const date = new Date(blog.created_at).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    });

                    return (
                        <div key={blog.id} className="col-md-6 blog-cards">
                            <div className="card blog-card h-100 shadow-sm">
                                {/* Image */}
                                <div className="blog-card-img position-relative">
                                    <img
                                        src={imageUrl}
                                        className="card-img-top"
                                        alt={blog.titre}
                                    />
                                    <span className="blog-date badge">
                                        {date}
                                    </span>
                                </div>

                                {/* Contenu */}
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <Link
                                            href={route('public.blogs.show', blog.id)}
                                            className="text-decoration-none"
                                        >
                                            <h5 className="card-title">{blog.titre}</h5>
                                        </Link>

                                        <p className="card-text blog-preview-text">
                                            {blog.article}
                                        </p>
                                    </div>

                                    {/* Bas de carte */}
                                    <div>
                                        <div className="blog-tags mb-2">
                                            {blog.blog_tag?.map((tag) => (
                                                <span
                                                    key={tag.id}
                                                    className="badge bg-light text-dark me-1"
                                                >
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: tag.icon,
                                                        }}
                                                    />{' '}
                                                    {tag.name}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="d-flex justify-content-between text-muted small">
                                            <span>
                                                Auteur : {blog.user?.first_name}{' '}
                                                {blog.user?.last_name}
                                            </span>
                                            <span className="d-flex align-items-center">
                                                💬 {blog.comments_count ?? 0}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

Index.layout = (page) =>
    page.props.auth && page.props.auth.user
        ? <AuthenticatedLayout>{page}</AuthenticatedLayout>
        : <GuestLayout>{page}</GuestLayout>;
