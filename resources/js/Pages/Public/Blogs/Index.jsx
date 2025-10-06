import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import React, { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import SearchBar from '@/Components/SearchBar';
import TagFilter from '@/Components/TagFilter';
import CategoryFilter from '@/Components/CategoryFilter';

export default function Index({ blogs, categories = [], tags = [], filters, onFilterChange }) {
  const [search, setSearch] = useState(filters?.search || '');
  const [catId, setCatId] = useState(filters?.cat_id || '');
  const [tagId, setTagId] = useState(filters?.tag_id || '');

  const applyFilter = (newFilters = {}) => {
    const updated = { search, cat_id: catId, tag_id: tagId, ...newFilters };
    setSearch(updated.search);
    setCatId(updated.cat_id);
    setTagId(updated.tag_id);

    router.visit(route('public.blogs.index'), {
        method: 'get',
        data: updated,
        preserveState: true,
        replace: true,
    });
 };

  return (
    <div className="container py-5">
      <div className="row">
        {/* Blogs à gauche */}
        <div className="col-md-8">
          <div className="row g-4">
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
                    <div className="blog-card-img position-relative">
                      <img src={imageUrl} className="card-img-top" alt={blog.titre} />
                      <span className="blog-date badge">{date}</span>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <Link href={route('public.blogs.show', blog.id)} className="text-decoration-none">
                          <h5 className="card-title">{blog.titre}</h5>
                        </Link>
                        <p className="card-text blog-preview-text">{blog.article}</p>
                      </div>
                      <div>
                        <div className="blog-tags mb-2">
                          {blog.blog_tag?.map((tag) => (
                            <span
                              key={tag.id}
                              className="badge bg-light text-dark me-1"
                              dangerouslySetInnerHTML={{
                                __html: tag.icon ? `${tag.icon} ${tag.name}` : tag.name,
                              }}
                            />
                          ))}
                        </div>
                        <div className="d-flex justify-content-between text-muted small">
                          <span>Auteur : {blog.user?.first_name} {blog.user?.last_name}</span>
                          <span>💬 {blog.comments_count || 0} Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filtres à droite */}
        <div className="col-md-4">
          <SearchBar initialValue={search} onSearch={(val) => applyFilter({ search: val })} />
          <CategoryFilter categories={categories} onSelect={(val) => applyFilter({ cat_id: val })} />
          <TagFilter tags={tags} onSelect={(val) => applyFilter({ tag_id: val })} />
        </div>
      </div>
    </div>
  );
}

Index.layout = (page) => (
    page.props.auth && page.props.auth.user 
        ? <AuthenticatedLayout>{page}</AuthenticatedLayout>
        : <GuestLayout>{page}</GuestLayout>
);