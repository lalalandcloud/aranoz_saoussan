import React from 'react';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className='div-glo-all'>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link href={route('public.home')} className="navbar-brand">
                        Aranoz
                    </Link>
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
                        
                    </ul>
                    
                    <div className="navbar-nav ms-auto">
                        <Link href={route('public.home')} className="nav-link">
                            Accueil
                        </Link>
                        <Link href="/login" className="nav-link">
                            Connexion
                        </Link>
                        <Link href="/register" className="nav-link">
                            Inscription
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="container home-container">
                {children}
            </main>

            <footer className="py-4 mt-5">
                <div className="container text-center">
                    <p className="text-muted mb-0">© 2025 Aranoz - Vente de Meubles en ligne</p>
                </div>
            </footer>
        </div>
    );
}