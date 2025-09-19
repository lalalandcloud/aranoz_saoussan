import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Dashboard from '../Dashboard';

export default function dashboard({ users, roles }) {
    return (
        <>
            <Head title="bienvenue" />

            <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Dashboard Admin</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Section Utilisateurs */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Utilisateurs ({users?.length || 0})
                        </h2>
                        
                        {users && users.length > 0 ? (
                            <div className="space-y-3">
                                {users.map(user => (
                                    <div key={user.id} className="border-b pb-2">
                                        <div className="font-medium">
                                            {user.first_name} {user.last_name}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {user.email} - {user.role?.name || 'Pas de rôle'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500">Aucun utilisateur trouvé</p>
                        )}
                    </div>

                    {/* Section Rôles */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Rôles ({roles?.length || 0})
                        </h2>
                        
                        {roles && roles.length > 0 ? (
                            <div className="space-y-2">
                                {roles.map(role => (
                                    <div key={role.id} className="bg-blue-100 px-3 py-1 rounded">
                                        {role.name}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500">Aucun rôle trouvé</p>
                        )}
                    </div>
                </div>
            </div>
        </>)
}
Dashboard.layout = (page) => (
    page.props.auth && page.props.auth.user 
        ? <AuthenticatedLayout>{page}</AuthenticatedLayout>
        : <GuestLayout>{page}</GuestLayout>
);