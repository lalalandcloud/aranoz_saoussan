import { Link, Head, usePage } from '@inertiajs/react';

export default function Welcome({ canLogin, canRegister, laravelVersion, phpVersion }) {
    const { auth } = usePage().props || {};
    const user = auth?.user; // Protection contre undefined

    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 selection:bg-red-500 selection:text-white">
                {canLogin && (
                    <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right z-10">
                        {user ? (
                            <Link
                                href={route('dashboard')}
                                className="font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Log in
                                </Link>

                                {canRegister && (
                                    <Link
                                        href={route('register')}
                                        className="ml-4 font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Register
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                )}

                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center">
                    </div>

                    <div className="mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            <h1>je suis la</h1>
                        </div>
                    </div>

                    <div className="flex justify-center mt-16 px-6 sm:items-center sm:justify-between">
                        <div className="text-center text-sm text-gray-500 sm:text-left">
                            <div className="flex items-center gap-4">
                                <span>Laravel v{laravelVersion} (PHP v{phpVersion})</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}