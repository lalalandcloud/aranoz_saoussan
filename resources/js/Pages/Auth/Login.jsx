import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Connexion" />

            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <h2>Bienvenue !</h2>
                        <p>Connectez-vous à votre compte</p>
                    </div>

                    <div className="auth-body">
                        {status && (
                            <div className="alert-status">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    autoComplete="username"
                                    autoFocus
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                {errors.email && (
                                    <div className="invalid-feedback d-block">
                                        {errors.email}
                                    </div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Mot de passe
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                {errors.password && (
                                    <div className="invalid-feedback d-block">
                                        {errors.password}
                                    </div>
                                )}
                            </div>

                            <div className="mb-3">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        name="remember"
                                        className="form-check-input"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor="remember">
                                        Se souvenir de moi
                                    </label>
                                </div>
                            </div>

                            {canResetPassword && (
                                <div className="mb-3 text-end">
                                    <Link href={route('password.request')} className="auth-link">
                                        Mot de passe oublié ?
                                    </Link>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn-primary-custom"
                                disabled={processing}
                            >
                                {processing ? 'Connexion...' : 'Se connecter'}
                            </button>
                        </form>
                    </div>

                    <div className="auth-footer">
                        Pas encore de compte ?{' '}
                        <Link href={route('register')} className="auth-link">
                            Créer un compte
                        </Link>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}