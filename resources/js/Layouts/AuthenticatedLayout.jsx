import React from 'react';
import { Link, router, usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ header, children }) {
    const { auth } = usePage().props;
    const user = auth.user;
    const isAdmin = user?.role?.name === 'admin';


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link href={route('public.home')} className="navbar-brand">
                        AutoMarket
                    </Link>
                    
                    <div className="navbar-nav me-auto">
                        <Link href={route('public.home')} className="nav-link">
                            Accueil
                        </Link>
                        <Link href={route('public.home')} className="nav-link">
                            Publier une annonce
                        </Link>
                        
                        {isAdmin && (
                            <>
                                <Link href="/admin/dashboard" className="nav-link">
                                    Dashboard Admin
                                </Link>
                                <Link href="/admin/products/" className="nav-link">
                                    Admin/Products
                                </Link>
                                <Link href="/admin/products/create" className="nav-link">
                                    Ajouter un produit
                                </Link>
                                
                            </>
                        )}
                    </div>

                    <div className="navbar-nav">
                        <div className="dropdown">
                            <button 
                                className="btn btn-outline-light dropdown-toggle" 
                                type="button" 
                                data-bs-toggle="dropdown"
                            >
                                {user.first_name} {user.last_name}
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/dashboard" className="dropdown-item">
                                        Tableau de bord
                                    </Link>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <button onClick={handleLogout} className="dropdown-item">
                                        Déconnexion
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <div className="bg-light py-3">
                    <div className="container">
                        {header}
                    </div>
                </div>
            )}


            <main>
                {children}
            </main>

            <footer className="bg-light py-4 mt-5">
                <div className="container text-center">
                    <p className="text-muted mb-0">© 2025 AutoMarket - Plateforme de vente de véhicules</p>
                </div>
            </footer>
        </div>
    );
}