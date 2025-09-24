import React from 'react';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link href={route('public.home')} className="navbar-brand">
                        AutoMarket
                    </Link>
                    
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

            <main>
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