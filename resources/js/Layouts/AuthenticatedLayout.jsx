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
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link href={route('public.home')} className="navbar-brand">
                        Aranoz
                    </Link>
                    
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavDropdown" 
                        aria-controls="navbarNavDropdown" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link href={route('public.home')} className="nav-link">
                                    Home
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link href={route('public.blogs.index')} className="nav-link">
                                    Blog
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link href={route('user.pins.index')} className="nav-link">
                                    Mes Favoris
                                </Link>
                            </li>
                                                        
                            {isAdmin && (
                                <>
                                    <li className="nav-item">
                                        <Link href={route('admin.dashboard')} className="nav-link">
                                            Dashboard Admin
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item dropdown">
                                        <a 
                                            className="nav-link dropdown-toggle" 
                                            href="#" 
                                            id="productsDropdown" 
                                            role="button" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false"
                                        >
                                            Produits
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                                            <li>
                                                <Link href={route('admin.products.create')} className="dropdown-item">
                                                    Ajouter un produit
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route('admin.coupons.index')} className="dropdown-item">
                                                    Gérer les Coupons
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route('admin.promos.index')} className="dropdown-item">
                                                    Gérer les Promos
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    <li className="nav-item dropdown">
                                        <a 
                                            className="nav-link dropdown-toggle" 
                                            href="#" 
                                            id="blogDropdown" 
                                            role="button" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false"
                                        >
                                            Blog Admin
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                                            <li>
                                                <Link href={route('admin.blogs.article.create')} className="dropdown-item">
                                                    Nouvel article
                                                </Link>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <Link href={route('admin.blogs.category.create')} className="dropdown-item">
                                                    Nouvelle catégorie
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={route('admin.blogs.tag.create')} className="dropdown-item">
                                                    Nouveau tag
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                            )}
                        </ul>
                        
                        <div className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a 
                                    className="nav-link dropdown-toggle text-white" 
                                    href="#" 
                                    id="userDropdown" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    {user.first_name} {user.last_name}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                    <li>
                                        <Link href={route('profile.edit')} className="dropdown-item">
                                            Mon Profil
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route('dashboard')} className="dropdown-item">
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <button 
                                            onClick={handleLogout} 
                                            className="dropdown-item"
                                        >
                                            Déconnexion
                                        </button>
                                    </li>
                                </ul>
                            </li>
                            <CartCounter />
                        </div>
                    </div>
                </div>
            </nav>
            

            <main className="container home-container">
                {children}
            </main>
            <footer className="bg-light py-4 mt-5">
                <div className="container text-center">
                    <p className="text-muted mb-0">© 2025 Aranoz - Vente de Meubles en ligne</p>
                </div>
            </footer>

        </div>
    );
}