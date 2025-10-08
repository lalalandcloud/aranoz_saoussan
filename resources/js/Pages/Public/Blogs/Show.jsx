import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import Comments from '@/Components/Comments';
import PinnedCarrousel from '@/Components/PinnedCarrousel';

export default function Show({ products, blog, auth }) {
    return (
        <>
            <Head title={blog.titre} />
            
            <PinnedCarrousel products={products} />
            
            <div className="blog-show-container">
                <div className="blog-show-header">
                    <Link href="/blogs" className="blog-back-link">
                        ← Retour aux blogs
                    </Link>
                </div>

                <article className="blog-article-card">
                    <header className="blog-article-header">
                        <h1 className="blog-article-title">{blog.titre}</h1>
                        
                        <div className="blog-article-meta">
                            <span className="blog-meta-author">
                                Par {blog.user.first_name} {blog.user.last_name}
                            </span>
                            <span className="blog-meta-divider">•</span>
                            <span className="blog-meta-date">
                                {new Date(blog.created_at).toLocaleDateString('fr-FR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>

                        <div className="blog-article-info">
                            {blog.blog_cat?.name && (
                                <span className="blog-category-badge">
                                    {blog.blog_cat.name}
                                </span>
                            )}
                            
                            {blog.blog_tag?.length > 0 && (
                                <div className="blog-tags-list">
                                    {blog.blog_tag.map(tag => (
                                        <span key={tag.id} className="blog-tag-item">
                                            <span dangerouslySetInnerHTML={{__html: tag.icon}} />
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </header>

                    {blog.blog_imgs?.[0]?.img && (
                        <div className="blog-article-image-main">
                            <img 
                                src={`/storage/${blog.blog_imgs[0].img}`}
                                alt={blog.titre}
                                className="blog-image"
                            />
                        </div>
                    )}

                    <div className="blog-article-content">
                        {blog.article.split('\n').map((paragraph, index) => (
                            paragraph.trim() && <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    {blog.blog_imgs?.[0]?.img2 && (
                        <div className="blog-article-image-secondary">
                            <img 
                                src={`/storage/${blog.blog_imgs[0].img2}`}
                                alt={blog.titre}
                                className="blog-image"
                            />
                        </div>
                    )}
                </article>

                <div className="blog-comments-section">
                    <Comments blog={blog} auth={auth} />
                </div>
            </div>
        </>
    );
}

Show.layout = (page) => (
    page.props.auth && page.props.auth.user 
        ? <AuthenticatedLayout>{page}</AuthenticatedLayout>
        : <GuestLayout>{page}</GuestLayout>
);