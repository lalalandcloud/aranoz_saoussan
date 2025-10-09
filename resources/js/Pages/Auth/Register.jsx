import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        address: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Inscription" />

            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <h2>Créer un compte</h2>
                        <p>Rejoignez-nous dès aujourd'hui</p>
                    </div>

                    <div className="auth-body">
                        <form onSubmit={submit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="first_name" className="form-label">
                                        Prénom
                                    </label>
                                    <input
                                        id="first_name"
                                        type="text"
                                        name="first_name"
                                        value={data.first_name}
                                        className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                                        autoComplete="given-name"
                                        autoFocus
                                        onChange={(e) => setData('first_name', e.target.value)}
                                        required
                                    />
                                    {errors.first_name && (
                                        <div className="invalid-feedback d-block">
                                            {errors.first_name}
                                        </div>
                                    )}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="last_name" className="form-label">
                                        Nom
                                    </label>
                                    <input
                                        id="last_name"
                                        type="text"
                                        name="last_name"
                                        value={data.last_name}
                                        className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
                                        autoComplete="family-name"
                                        onChange={(e) => setData('last_name', e.target.value)}
                                        required
                                    />
                                    {errors.last_name && (
                                        <div className="invalid-feedback d-block">
                                            {errors.last_name}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">
                                    Adresse
                                </label>
                                <input
                                    id="address"
                                    type="text"
                                    name="address"
                                    value={data.address}
                                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                    autoComplete="street-address"
                                    onChange={(e) => setData('address', e.target.value)}
                                    required
                                />
                                {errors.address && (
                                    <div className="invalid-feedback d-block">
                                        {errors.address}
                                    </div>
                                )}
                            </div>

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
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
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
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />
                                {errors.password && (
                                    <div className="invalid-feedback d-block">
                                        {errors.password}
                                    </div>
                                )}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password_confirmation" className="form-label">
                                    Confirmer le mot de passe
                                </label>
                                <input
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className={`form-control ${errors.password_confirmation ? 'is-invalid' : ''}`}
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />
                                {errors.password_confirmation && (
                                    <div className="invalid-feedback d-block">
                                        {errors.password_confirmation}
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="btn-primary-custom"
                                disabled={processing}
                            >
                                {processing ? 'Inscription...' : "S'inscrire"}
                            </button>
                        </form>
                    </div>

                    <div className="auth-footer">
                        Déjà un compte ?{' '}
                        <Link href={route('login')} className="auth-link">
                            Se connecter
                        </Link>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}