import React from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import CartCounter from '@/Components/CartCounter';

export default function AuthenticatedLayout({ header, children }) {
    const page = usePage();
    
    console.log('Full page object:', page);
    console.log('Page props:', page.props);
    
    // Vérifications de sécurité AVANT d'accéder aux données
    if (!page.props) {
        return <div>Erreur: Aucune props reçue</div>;
    }
    
    const auth = page.props?.auth;
    console.log('Auth in props:', auth);
    
    if (!auth) {
        return <div>Erreur: Pas de données auth</div>;
    }
    
    if (!auth.user) {
        return <div>Erreur: Utilisateur non trouvé</div>;
    }

    // MAINTENANT on peut accéder aux données en sécurité
    const user = auth.user;
    console.log('User:', user);
    console.log('User role:', user?.role);
    
    const isAdmin = user.role && user.role.name === 'admin';
    console.log('IsAdmin:', isAdmin);

    const handleLogout = () => {
        router.post('/logout');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link href={route('public.home')} className="navbar-brand">
                        Aranoz
                    </Link>
                    <div className="navbar-nav me-auto">
                        <Link href={route('public.home')} className="nav-link">
                            Accueil
                        </Link>
                        
                        {isAdmin && (
                            <>
                                <Link href="/admin/dashboard" className="nav-link">
                                    Dashboard Admin
                                </Link>
                                {/* <Link href="/admin/products/" className="nav-link">
                                    Tous les produits
                                </Link> */}
                                <Link href="/admin/products/create" className="nav-link">
                                    Ajouter un produit
                                </Link>
                                <Link href="/admin/products/coupons" className="nav-link">
                                    Coupons
                                </Link>
                                <Link href="/admin/products/promos" className="nav-link">
                                    Promos
                                </Link>
                                <Link href="/admin/blogs/article/new" className="nav-link">
                                    Blog - Nouvel article
                                </Link>
                                <Link href="/admin/blog/category/new" className="nav-link">
                                    Blog - Nouvelle catégorie
                                </Link>
                                <Link href="/admin/blog/tag/new" className="nav-link">
                                    Blog - Nouveau tag
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="navbar-nav">
                        <span className="navbar-text text-white">
                            Bonjour {user.first_name} {user.last_name}
                        </span>
                        <CartCounter />
                        <button 
                            onClick={handleLogout} 
                            className="btn btn-outline-light ms-2"
                        >
                            Déconnexion
                        </button>
                    </div>
                </div>
            </nav>

            <main className="container mt-4">
                {children}
            </main>
        </div>
    );
}